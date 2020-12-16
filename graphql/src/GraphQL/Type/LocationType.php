<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Entity\Location;
use App\GraphQL\Context;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class LocationType extends ObjectType
{
	public function __construct()
	{
        $config = [
			'fields' => function () {
				return [
					'id' => Type::nonNull(Type::int()),
					'city' => Type::nonNull(Type::string()),
					'street' => Type::nonNull(Type::string()),
					'postalCode' => Type::nonNull(Type::string()),
					'country' => Type::nonNull(Type::string()),
					'lat' => Type::nonNull(Type::float()),
					'lng' => Type::nonNull(Type::float()),               
				];
			},
			'resolveField' => function (Location $value, array $args, Context $context, ResolveInfo $info) {
				$method = 'get' . ucfirst($info->fieldName);
				$resolveMethod = 'resolve' . ucfirst($info->fieldName);
				if (method_exists($value, $method)) {
					return $value->{$method}();
				}else {
					return $this->{$resolveMethod}($value, $args, $context, $info);
				}
			}
		];
		parent::__construct($config);
	}

}
