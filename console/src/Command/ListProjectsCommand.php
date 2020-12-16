<?php declare(strict_types=1);

namespace App\Command;

use SkillShare\QueryObject\ProjectQuery;
use SkillShare\QueryObject\SupplierQuery;
use SkillShare\QueryObject\UserQuery;
use SkillShare\Repository\ProjectRepository;
use SkillShare\Repository\SupplierRepository;
use SkillShare\Repository\UserRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class ListProjectsCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:list-projects';

	private ProjectRepository $projectRepository;

	private ProjectQuery $projectQuery;

	private UserQuery $userQuery;

	private UserRepository $userRepository;

	private SupplierQuery $supplierQuery;

    private SupplierRepository $supplierRepository;
    
    public function __construct(
		ProjectRepository $projectRepository,
		ProjectQuery $projectQuery,
		UserQuery $userQuery,
		UserRepository $userRepository,
		SupplierQuery $supplierQuery,
		SupplierRepository $supplierRepository
	) {
		$this->projectQuery = $projectQuery;
		$this->projectRepository = $projectRepository;
		$this->userQuery = $userQuery;
		$this->userRepository = $userRepository;
		$this->supplierRepository =$supplierRepository;
		$this->supplierQuery = $supplierQuery;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('List available projects')
            ->setHelp('This command lists all projects available for you, based on supplied token');
        
        $this->addArgument('token', InputArgument::OPTIONAL, 'Your app access token');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
		$projectQuery = $this->projectQuery;
		if($input->getArgument('token')){
			$supplier = $this->supplierRepository->find($this->supplierQuery->withTokenCond($input->getArgument('token')));
			$user = $this->userRepository->find($this->userQuery->withTokenCond($input->getArgument('token')));
			$projectQuery = $supplier === null && $user !== null ? $projectQuery->withUserIdCond($user->getId()) : $projectQuery;
		}

        $projects = $this->projectRepository->findAll($this->projectQuery);
        
        foreach($projects as $project){
            $name = $project->getName();
            $id = $project->getId();
            $output->writeln("ID: {$id}; NAME: {$name}");
        }
    }

}