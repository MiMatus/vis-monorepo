<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Entity\Category;
use SkillShare\Entity\Offer;
use SkillShare\Entity\Project;
use App\GraphQL\Context;
use App\GraphQL\TypeRegistry;
use SkillShare\QueryObject\CategoryQuery;
use SkillShare\QueryObject\OfferQuery;
use SkillShare\QueryObject\ReviewQuery;
use SkillShare\Repository\CategoryRepository;
use SkillShare\Repository\OfferRepository;
use SkillShare\Repository\ReviewRepository;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ProjectType extends ObjectType
{

	private CategoryRepository $categoryRepository;

	private CategoryQuery $categoryQuery;

	private OfferRepository $offerRepository;

	private OfferQuery $offerQuery;

	private ReviewRepository $reviewRepository;

	private ReviewQuery $reviewQuery;

	public function __construct(
		TypeRegistry $typeRegistry,
		CategoryRepository $categoryRepository,
		CategoryQuery $categoryQuery,
		OfferRepository $offerRepository,
		OfferQuery $offerQuery,
		ReviewRepository $reviewRepository,
		ReviewQuery $reviewQuery
	){
        $config = [
			'fields' => function () use ($typeRegistry){
				return [
					'id' => Type::nonNull(Type::int()),
					'name' => Type::nonNull(Type::string()),
					'description' => Type::nonNull(Type::string()),
					'allowedArea' => Type::nonNull(Type::int()),
					'location' => Type::nonNull($typeRegistry->getByClassName(LocationType::class)),             
					'category' => Type::nonNull($typeRegistry->getByClassName(CategoryType::class)),
					'acceptedOffer' => $typeRegistry->getByClassName(OfferType::class),
					'offers' => [
						'type' => Type::nonNull(Type::listOf(Type::nonNull($typeRegistry->getByClassName(OfferType::class)))),
						'args' => [
							'limit' => [
								'type' => Type::int(),
								'description' => 'Limit the number of recent likes returned',
								'defaultValue' => 10
							]
						],
					],
					'expectedPrice' => Type::nonNull(Type::int()),
					'reviews' => Type::nonNull(Type::listOf(Type::nonNull($typeRegistry->getByClassName(ReviewType::class)))),
				];
			},
			'resolveField' => function (Project $value, array $args, Context $context, ResolveInfo $info) {
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
		$this->categoryRepository = $categoryRepository;
		$this->categoryQuery = $categoryQuery;
		$this->offerRepository = $offerRepository;
		$this->offerQuery = $offerQuery;
		$this->reviewRepository = $reviewRepository;
		$this->reviewQuery = $reviewQuery;
	}

	private function resolveCategory(Project $value, array $args, Context $context, ResolveInfo $info): Category
	{
		return $this->categoryRepository->find($this->categoryQuery->withIdCond($value->getCategoryId()));
	}

	private function resolveOffers(Project $value, array $args, Context $context, ResolveInfo $info): array
	{
		return $this->offerRepository->findAll($this->offerQuery->withProjectIdCond($value->getId()));
	}

	private function resolveReviews(Project $value, array $args, Context $context, ResolveInfo $info): array
	{
		return $this->reviewRepository->findAll($this->reviewQuery->withProjectIdCond($value->getId()));
	}

	private function resolveAcceptedOffer(Project $value, array $args, Context $context, ResolveInfo $info): ?Offer
	{
		return $this->offerRepository->find($this->offerQuery->withProjectIdCond($value->getId())->withAcceptedCond());
	}

}
