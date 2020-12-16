<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Entity\User;
use App\GraphQL\Context;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\ProjectQuery;
use SkillShare\Repository\ProjectRepository;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class UserType extends ObjectType
{

	private ProjectRepository $projectRepository;

	private ProjectQuery $projectQuery;

	public function __construct(
		TypeRegistry $typeRegistry,
		ProjectRepository $projectRepository,
		ProjectQuery $projectQuery
	) {
        $config = [
			'fields' => function () use ($typeRegistry){
				return [
					'id' => Type::nonNull(Type::int()),
					'email' => Type::nonNull(Type::string()),
					'projects' => Type::nonNull(Type::listOf(Type::nonNull($typeRegistry->getByClassName(ProjectType::class))))
				];
			},
			'resolveField' => function (User $value, array $args, Context $context, ResolveInfo $info) {
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
		$this->projectRepository = $projectRepository;
		$this->projectQuery = $projectQuery;
	}

	private function resolveProjects(User $value, array $args, Context $context, ResolveInfo $info): array
	{
		return $this->projectRepository->findAll($this->projectQuery->withUserIdCond($value->getId()));
	}

}
