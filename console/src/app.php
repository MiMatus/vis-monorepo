#!/usr/bin/env php
<?php

use App\Command\CreateProjectCommand;
use App\Command\CreateSupplierCommand;
use App\Command\ListCategoriesCommand;
use App\Command\ListProjectsCommand;
use Nette\Configurator;
use Symfony\Component\Console\Application;

require __DIR__.'/../vendor/autoload.php';


$configurator = new Configurator();
$configurator->setTempDirectory(__DIR__ . '/../temp');
$configurator->addConfig(__DIR__ . '/../config/config.neon');
if(file_exists(__DIR__ . '/../config/config.local.neon')){
    $configurator->addConfig(__DIR__ . '/../config/config.local.neon');
}
\Tracy\Debugger::$logDirectory = __DIR__ . '/../log';
$container = $configurator->createContainer();


$createSupplierCommand = $container->getByType(CreateSupplierCommand::class);
$createProjectCommand = $container->getByType(CreateProjectCommand::class);
$listProjectsCommand = $container->getByType(ListProjectsCommand::class);
$listCategoriesCommand = $container->getByType(ListCategoriesCommand::class);

$application = new Application();
$application->addCommands([
    $createSupplierCommand,
    $createProjectCommand,
    $listProjectsCommand,
    $listCategoriesCommand
]);

// Start the console application.
exit($application->run());