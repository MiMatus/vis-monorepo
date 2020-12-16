<?php declare(strict_types=1);

namespace App\GraphQL\Query;

use App\GraphQL\Context;
use App\GraphQL\Type\ProjectType;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\ProjectQuery;
use SkillShare\Repository\ProjectRepository;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use SkillShare\QueryObject\SupplierQuery;
use SkillShare\QueryObject\UserQuery;
use SkillShare\Repository\SupplierRepository;
use SkillShare\Repository\UserRepository;

final class ProjectsQuery
{

	private TypeRegistry $typeRegistry;
	
	private ProjectRepository $projectRepository;

	private ProjectQuery $projectQuery;

	private UserQuery $userQuery;

	private UserRepository $userRepository;

	private SupplierQuery $supplierQuery;

	private SupplierRepository $supplierRepository;

	public function __construct(
		TypeRegistry $typeRegistry,
		ProjectRepository $projectRepository,
		ProjectQuery $projectQuery,
		UserQuery $userQuery,
		UserRepository $userRepository,
		SupplierQuery $supplierQuery,
		SupplierRepository $supplierRepository
	) {
		$this->typeRegistry = $typeRegistry;
		$this->projectQuery = $projectQuery;
		$this->projectRepository = $projectRepository;
		$this->userQuery = $userQuery;
		$this->userRepository = $userRepository;
		$this->supplierRepository =$supplierRepository;
		$this->supplierQuery = $supplierQuery;
	}

	public function getDefinition(): array
	{
		return [
			'type' => Type::nonNull(Type::listOf(Type::nonNull($this->typeRegistry->getByClassName(ProjectType::class)))),
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		$projectQuery = $this->projectQuery;
		if($context->getToken() !== null){
			$supplier = $this->supplierRepository->find($this->supplierQuery->withTokenCond($context->getToken()));
			$user = $this->userRepository->find($this->userQuery->withTokenCond($context->getToken()));
			$projectQuery = $supplier === null && $user !== null ? $projectQuery->withUserIdCond($user->getId()) : $projectQuery;
		}

		return $this->projectRepository->findAll($this->projectQuery);
    }


}