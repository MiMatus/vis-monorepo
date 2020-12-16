<?php declare(strict_types=1);

namespace App;

use Nette\Configurator;
use Tracy\Debugger;

final class Bootstrap
{
	public static function boot(): \Nette\DI\Container
	{
		$configurator = new Configurator();
		$configurator->setTempDirectory(__DIR__ . '/../temp');
		$configurator->addConfig(__DIR__ . '/Config/config.neon');
		if(file_exists(__DIR__ . '/Config/config.local.neon')){
			$configurator->addConfig(__DIR__ . '/Config/config.local.neon');
		}
		Debugger::$logDirectory = __DIR__ . '/../log';
		return $configurator->createContainer();
	}

	public static function bootForTests(): void
	{
		require_once __DIR__ . '/../../vendor/autoload.php';

		\Tester\Environment::setup();
	}
}
