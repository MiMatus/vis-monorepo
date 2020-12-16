<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Entity\Category;
use App\GraphQL\Context;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class CategoryType extends ObjectType
{
	public function __construct(\App\GraphQL\TypeRegistry $typeRegistry)
	{
        $config = [
			'fields' => function () use ($typeRegistry){
				return [
					'id' => Type::nonNull(Type::int()),
					'name' => Type::nonNull(Type::string()),
					'description' => Type::nonNull(Type::string()),               
				];
			},
			'resolveField' => function (Category $value, array $args, Context $context, ResolveInfo $info) {
				$method = 'get' . ucfirst($info->fieldName);
				if (method_exists($value, $method)) {
					return $value->{$method}();
				}
			}
		];
		parent::__construct($config);
	}

}
