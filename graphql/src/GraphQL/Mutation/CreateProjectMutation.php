<?php declare(strict_types=1);

namespace App\GraphQL\Mutation;

use App\GraphQL\Context;
use App\GraphQL\Type\CreateProjectResultType;
use App\GraphQL\Type\ProjectDataInputType;
use App\GraphQL\TypeRegistry;
use SkillShare\Service\CreateProject;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

final class CreateProjectMutation
{

	private TypeRegistry $typeRegistry;
	
	private CreateProject $createProject;

	public function __construct(
		TypeRegistry $typeRegistry,
		CreateProject $createProject
	){
		$this->typeRegistry = $typeRegistry;
		$this->createProject = $createProject;
	}

	public function getDefinition(): array
	{
		return [
			'type' => Type::nonNull($this->typeRegistry->getByClassName(CreateProjectResultType::class)),
			'args' => [
				'data' => Type::nonNull($this->typeRegistry->getByClassName(ProjectDataInputType::class)),	
			],
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		$token = $context->getToken() ?? '';
		return $this->createProject->createProject(
			$token, 
			$args['data']['name'],
			$args['data']['description'],
			$args['data']['expectedPrice'],
			$args['data']['categoryId'],
			$args['data']['location']['street'],
			$args['data']['location']['city'],
			$args['data']['location']['country'],
			$args['data']['location']['postalCode'],
			$args['data']['location']['area'],
		);
	}



}