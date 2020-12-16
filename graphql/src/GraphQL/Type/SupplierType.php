<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Entity\Supplier;
use App\GraphQL\Context;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class SupplierType extends ObjectType
{
	public function __construct(\App\GraphQL\TypeRegistry $typeRegistry)
	{
        $config = [
			'fields' => function () use ($typeRegistry){
				return [
					'id' => Type::nonNull(Type::int()),
					'name' => Type::nonNull(Type::string()),
					'location' => Type::nonNull($typeRegistry->getByClassName(LocationType::class)),              
				];
			},
			'resolveField' => function (Supplier $value, array $args, Context $context, ResolveInfo $info) {
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
