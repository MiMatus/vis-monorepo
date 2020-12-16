<?php declare(strict_types=1);

namespace App\GraphQL\Query;

use App\GraphQL\Context;
use App\GraphQL\Type\CategoryType;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\CategoryQuery;
use SkillShare\Repository\CategoryRepository;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

final class CategoriesQuery
{

	private TypeRegistry $typeRegistry;
	
	private CategoryRepository $categoryRepository;

	private CategoryQuery $categoryQuery;

	public function __construct(
		TypeRegistry $typeRegistry,
		CategoryRepository $categoryRepository,
		CategoryQuery $categoryQuery
	) {
		$this->typeRegistry = $typeRegistry;
		$this->categoryQuery = $categoryQuery;
		$this->categoryRepository = $categoryRepository;
	}

	public function getDefinition(): array
	{
		return [
			'type' => Type::nonNull(Type::listOf(Type::nonNull($this->typeRegistry->getByClassName(CategoryType::class)))),
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		return $this->categoryRepository->findAll($this->categoryQuery);
    }


}