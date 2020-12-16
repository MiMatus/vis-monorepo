<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\Type;

class LocationInputType extends InputObjectType
{
	public function __construct()
	{
        $config = [
			'fields' => function () {
				return [
					'city' => Type::nonNull(Type::string()),
					'street' => Type::nonNull(Type::string()),
					'postalCode' => Type::nonNull(Type::string()),
					'country' => Type::nonNull(Type::string()), 
					'area' => Type::nonNull(Type::int())   
				];
			},
			'resolveField' => fn() => null
		];
		parent::__construct($config);
	}

}
