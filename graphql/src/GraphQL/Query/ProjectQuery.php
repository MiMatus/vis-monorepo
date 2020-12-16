<?php declare(strict_types=1);

namespace App\GraphQL\Query;

use App\GraphQL\Type\ProjectType;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\OfferQuery;
use SkillShare\Repository\OfferRepository;
use GraphQL\Examples\Blog\AppContext;
use GraphQL\Type\Definition\ResolveInfo;
use App\GraphQL\Context;
use SkillShare\QueryObject\ProjectQuery as QueryObjectProjectQuery;
use SkillShare\Repository\ProjectRepository;
use GraphQL\Type\Definition\Type;

final class ProjectQuery
{

	private TypeRegistry $typeRegistry;
	
	private ProjectRepository $projectRepository;

	private QueryObjectProjectQuery $projectQuery;

	public function __construct(
		TypeRegistry $typeRegistry,
		ProjectRepository $projectRepository, 
		QueryObjectProjectQuery $projectQuery
	) {
		$this->typeRegistry = $typeRegistry;
		$this->projectRepository = $projectRepository;
		$this->projectQuery = $projectQuery;
	}

	public function getDefinition(): array
	{
		return [
			'type' => $this->typeRegistry->getByClassName(ProjectType::class),
			'args' => [
				'id' => Type::nonNull(Type::int()),	
			],			
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		return $this->projectRepository->find($this->projectQuery->withIdCond($args['id']));
    }


}