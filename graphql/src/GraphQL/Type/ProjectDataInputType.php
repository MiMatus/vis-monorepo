<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class ProjectDataInputType extends InputObjectType
{
	public function __construct(\App\GraphQL\TypeRegistry $typeRegistry)
	{
        $config = [
			'fields' => function () use ($typeRegistry){
				return [
					'name' => Type::nonNull(Type::string()),
					'description' => Type::nonNull(Type::string()),
					'location' => Type::nonNull($typeRegistry->getByClassName(LocationInputType::class)),             
					'categoryId' => Type::nonNull(Type::int()),
					'expectedPrice' => Type::nonNull(Type::int()),
				];
			},
			'resolveField' => fn() => null
		];
		parent::__construct($config);
	}

}
