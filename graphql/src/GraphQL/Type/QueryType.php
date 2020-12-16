<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use App\GraphQL\Query\CategoriesQuery;
use App\GraphQL\Query\ProjectQuery;
use App\GraphQL\Query\ProjectsQuery;
use App\GraphQL\Query\SupplierQuery;
use App\GraphQL\Query\SuppliersQuery;
use App\GraphQL\Query\UserQuery;
use GraphQL\Type\Definition\ObjectType;

class QueryType extends ObjectType
{
	public function __construct(\App\GraphQL\TypeRegistry $typeRegistry)
	{
        $config = [
            'name' => 'Queries',
			'fields' => function () use ($typeRegistry){
				return [
					'supplier' => $typeRegistry->getByClassName(SupplierQuery::class)->getDefinition(),
					'user' => $typeRegistry->getByClassName(UserQuery::class)->getDefinition(),
					'suppliers' => $typeRegistry->getByClassName(SuppliersQuery::class)->getDefinition(),
					'project' => $typeRegistry->getByClassName(ProjectQuery::class)->getDefinition(),
					'projects' => $typeRegistry->getByClassName(ProjectsQuery::class)->getDefinition(),
					'categories' => $typeRegistry->getByClassName(CategoriesQuery::class)->getDefinition(),
				];
			},
			'resolveField' => fn() => null
		];
		parent::__construct($config);
	}

}
