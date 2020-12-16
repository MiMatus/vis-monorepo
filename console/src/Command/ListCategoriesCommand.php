<?php declare(strict_types=1);

namespace App\Command;

use SkillShare\QueryObject\CategoryQuery;
use SkillShare\Repository\CategoryRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

final class ListCategoriesCommand extends Command
{
    // the name of the command (the part after "bin/console")
	protected static $defaultName = 'app:list-categories';
	
	private CategoryQuery $categoryQuery;

	private CategoryRepository $categoryRepository;
    
    public function __construct(
		CategoryQuery $categoryQuery,
		CategoryRepository $categoryRepository
	) {
		$this->categoryQuery = $categoryQuery;
		$this->categoryRepository = $categoryRepository;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('List all projects categories')
            ->setHelp('This command lists all categories');        
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
		$categories = $this->categoryRepository->findAll($this->categoryQuery);
		foreach($categories as $category){
			$name = $category->getName();
			$id = $category->getId();
			$description = $category->getDescription();
			$output->writeln("ID: $id, NAME: $name, DESC: $description");
		}
    }

}