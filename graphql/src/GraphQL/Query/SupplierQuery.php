<?php declare(strict_types=1);

namespace App\GraphQL\Query;

use App\GraphQL\Context;
use App\GraphQL\Type\LocationType;
use App\GraphQL\Type\SupplierType;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\SupplierQuery as QueryObjectSupplierQuery;
use SkillShare\Repository\SupplierRepository;
use GraphQL\Examples\Blog\AppContext;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

final class SupplierQuery
{

	private TypeRegistry $typeRegistry;
	
	private SupplierRepository $supplierRepository;

	private QueryObjectSupplierQuery $supplierQuery;

	public function __construct(
		TypeRegistry $typeRegistry,
		SupplierRepository $supplierRepository,
		QueryObjectSupplierQuery $supplierQuery
	) {
		$this->typeRegistry = $typeRegistry;
		$this->supplierQuery = $supplierQuery;
		$this->supplierRepository = $supplierRepository;
	}

	public function getDefinition(): array
	{
		return [
			'type' => $this->typeRegistry->getByClassName(SupplierType::class),
			'args' => [
				'id' => Type::nonNull(Type::int()),	
			],
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		return $this->supplierRepository->find($this->supplierQuery->withIdCond($args['id']));
    }


}