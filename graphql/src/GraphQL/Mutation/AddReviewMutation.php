<?php declare(strict_types=1);

namespace App\GraphQL\Mutation;

use App\GraphQL\Context;
use App\GraphQL\Type\AddReviewResultType;
use App\GraphQL\TypeRegistry;
use SkillShare\Service\AddReview;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

final class AddReviewMutation
{
    private TypeRegistry $typeRegistry;
	
	private AddReview $addReview;

	public function __construct(
		TypeRegistry $typeRegistry,
		AddReview $addReview
	) {
		$this->addReview = $addReview;
		$this->typeRegistry = $typeRegistry;
	}

	public function getDefinition(): array
	{
		return [
			'type' => Type::nonNull($this->typeRegistry->getByClassName(AddReviewResultType::class)),
			'args' => [
				'projectId' => Type::nonNull(Type::int()),	
				'content' => Type::nonNull(Type::string()),	
				'positive' => Type::nonNull(Type::boolean()),
			],
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		$token = $context->getToken() ?? '';
		return $this->addReview->addReview($token, $args['projectId'], $args['positive'], $args['content']);
    }


}