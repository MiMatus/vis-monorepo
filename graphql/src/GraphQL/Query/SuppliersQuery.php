<?php declare(strict_types=1);

namespace App\GraphQL\Query;

use App\GraphQL\Context;
use App\GraphQL\Type\LocationInputType;
use App\GraphQL\Type\SupplierType;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\SupplierQuery;
use SkillShare\Repository\SupplierRepository;
use SkillShare\Service\GEOLocation;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

final class SuppliersQuery
{

	private TypeRegistry $typeRegistry;
	
	private SupplierRepository $supplierRepository;

	private SupplierQuery $supplierQuery;

	private GeoLocation $geoLocation;

	public function __construct(
		TypeRegistry $typeRegistry,
		SupplierRepository $supplierRepository,
		SupplierQuery $supplierQuery,
		GeoLocation $geoLocation
	) {
		$this->typeRegistry = $typeRegistry;
		$this->supplierQuery = $supplierQuery;
		$this->supplierRepository = $supplierRepository;
		$this->geoLocation = $geoLocation;
	}

	public function getDefinition(): array
	{
		return [
			'type' => Type::nonNull(Type::listOf(Type::nonNull($this->typeRegistry->getByClassName(SupplierType::class)))),
			'args' => [
				'location' => $this->typeRegistry->getByClassName(LocationInputType::class),			
			],
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		$query = $this->supplierQuery;
		if(isset($args['location'])){
			[$lat, $lng] = $this->geoLocation->getCoordinates(
				$args['location']['city'], 
				$args['location']['street'], 
				$args['location']['postalCode'], 
				$args['location']['country']
			);
			$query = $query->withPointAreaCond($lat, $lng, $args['location']['area']);
		}
		return $this->supplierRepository->findAll($query);
    }


}