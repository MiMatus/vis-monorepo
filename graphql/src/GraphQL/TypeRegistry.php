<?php declare(strict_types=1);

namespace App\GraphQL;

use Nette\DI\Container;

final class TypeRegistry
{
    private Container $diContainer;

    private array $types = [];

    public function __construct(Container $diContainer)
    {
        $this->diContainer = $diContainer;
    }

	public function getByClassName(string $className): object
	{
		$className = '\\'.ltrim($className, '\\');
		return $this->types[$className] ?? ($this->types[$className] = $this->diContainer->getByType($className));
	}

	public function getByTypeName(string $typeName): object
	{
		$className = '\\App\\GraphQL\\Type\\'.$typeName.'Type';
		return $this->types[$className] ?? ($this->types[$className] = $this->diContainer->getByType($className));
	}
}