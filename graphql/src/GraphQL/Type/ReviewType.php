<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Entity\Review;
use App\GraphQL\Context;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ReviewType extends ObjectType
{
	public function __construct(\App\GraphQL\TypeRegistry $typeRegistry)
	{
        $config = [
			'fields' => function () use ($typeRegistry){
				return [
					'id' => Type::nonNull(Type::int()),
					'positive' => Type::nonNull(Type::boolean()),
					'userId' => Type::nonNull(Type::int()), 
					'content' => Type::nonNull(Type::string()), 
				];
			},
			'resolveField' => function (Review $value, array $args, Context $context, ResolveInfo $info) {
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

	private function resolvePositive(Review $value, array $args, Context $context, ResolveInfo $info): bool
	{
		return $value->isPositive();
	}
}
