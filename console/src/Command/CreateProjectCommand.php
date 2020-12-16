<?php declare(strict_types=1);

namespace App\Command;

use SkillShare\Entity\Location;
use SkillShare\Service\CreateProject;
use SkillShare\Service\ICreateProjectResult;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class CreateProjectCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:create-project';

    private CreateProject $createProject;

    public function __construct(
        CreateProject $createProject
    ) {
        $this->createProject = $createProject;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Creates a new project.')
            ->setHelp('This command allows you to create a new project');
        
        $this->addArgument('token', InputArgument::REQUIRED, 'Your app access token');       
        $this->addArgument('name', InputArgument::REQUIRED, 'Name of project');       
        $this->addArgument('description', InputArgument::REQUIRED, 'Description of project');       
        $this->addArgument('categoryId', InputArgument::REQUIRED, 'Id of selected category');
        $this->addArgument('street', InputArgument::REQUIRED, 'Street of project\'s Address, e.g 17. listopadu 2172/15');
        $this->addArgument('postalCode', InputArgument::REQUIRED, 'Postal Code of project\'s Address, e.g 708 00');
        $this->addArgument('country', InputArgument::REQUIRED, 'Country of project\'s Address, e.g Czech republic');
        $this->addArgument('city', InputArgument::REQUIRED, 'City of project\'s Address, e.g Ostrava');
        $this->addArgument('allowedArea', InputArgument::REQUIRED, 'City of project\'s Address, e.g Ostrava');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $result = $this->createProject->createProject(
            $input->getArgument('token'),
            $input->getArgument('name'),
            $input->getArgument('description'),
            (int) $input->getArgument('expectedPrice'),
            (int) $input->getArgument('categoryId'),
            $input->getArgument('street'),
            $input->getArgument('city'),
            $input->getArgument('country'),
            $input->getArgument('postalCode'),
            (int) $input->getArgument('allowedArea')
        );

        if ($result === ICreateProjectResult::UNAUTHORIZED){
            $output->writeln('You don\'t have permission to create new project');
        } elseif ($result === ICreateProjectResult::UNAVAILABLE_SUPPLIER){
            $output->writeln('In selected area is not any registred supplier, try to change location details');
        } elseif ($result === ICreateProjectResult::ERROR){
            $output->writeln('Unexpected error occured, try again later');
        } else{
            $output->writeln('Project has been succesfully created');
        }

        return $result === ICreateProjectResult::SUCCESS ? 0 : 1;
    }

    private function getLocationFromInput(InputInterface $input): Location
    {
		[$lat, $lng] = $this->geoLocation->getCoordinates(
			$input->getArgument('city'), 
			$input->getArgument('street'), 
			$input->getArgument('postalCode'), 
			$input->getArgument('country'),
		);

		return new Location(
			$input->getArgument('city'), 
			$input->getArgument('street'), 
			$input->getArgument('postalCode'), 
			$input->getArgument('country'),
			$lat, 
			$lng
		);        
    }
}