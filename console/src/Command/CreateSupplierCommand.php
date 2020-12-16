<?php declare(strict_types=1);

namespace App\Command;

use SkillShare\Entity\Location;
use SkillShare\Entity\Supplier;
use SkillShare\Repository\SupplierRepository;
use SkillShare\Service\GeoLocation;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class CreateSupplierCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:create-supplier';

    private  GeoLocation $geoLocation;

    private SupplierRepository $supplierRepository;

    public function __construct(
        GeoLocation $geoLocation,
        SupplierRepository $supplierRepository
    ) {
        $this->geoLocation = $geoLocation;
        $this->supplierRepository = $supplierRepository;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Creates a new supplier.')
            ->setHelp('This command allows you to create a new supplier and return access token on success');
        
        
        $this->addArgument('email', InputArgument::REQUIRED, 'Email address of supplier');
        $this->addArgument('name', InputArgument::REQUIRED, 'Name of supplier');
        $this->addArgument('street', InputArgument::REQUIRED, 'Street of supplier\'s Address, e.g 17. listopadu 2172/15');
        $this->addArgument('postalCode', InputArgument::REQUIRED, 'Postal Code of supplier\'s Address, e.g 708 00');
        $this->addArgument('country', InputArgument::REQUIRED, 'Country of supplier\'s Address, e.g Czech republic');
        $this->addArgument('city', InputArgument::REQUIRED, 'City of supplier\'s Address, e.g Ostrava');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $pseudoToken = bin2hex(random_bytes(5));
        $supplier = new Supplier(
            $input->getArgument('email'),
            $pseudoToken,
            $this->getLocationFromInput($input),
            $input->getArgument('name')
        );
        if($this->supplierRepository->save($supplier)){
            $output->writeln([
                'Supplier has been successfully created',
                'Supplier\'s access token is: '.$pseudoToken
            ]);
            return 0;
        }
        $output->writeln([
            'Unable to create new Supplier, please check arguments and try again',
        ]);        
        return 1;
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