<?php declare(strict_types=1);

namespace App\GraphQL\Mutation;

use App\GraphQL\Context;
use App\GraphQL\Type\AddOfferResultType;
use App\GraphQL\Type\DateTimeType;
use App\GraphQL\TypeRegistry;
use SkillShare\Service\AddOffer;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

final class AddOfferMutation
{

    private TypeRegistry $typeRegistry;

	private AddOffer $addOffer;

	public function __construct(
		TypeRegistry $typeRegistry,
		AddOffer $addOffer
	) {
		$this->typeRegistry = $typeRegistry;
		$this->addOffer = $addOffer;
	}

	public function getDefinition(): array
	{
		return [
			'type' => Type::nonNull($this->typeRegistry->getByClassName(AddOfferResultType::class)),
			'args' => [
				'projectId' => Type::nonNull(Type::int()),	
				'price' => Type::nonNull(Type::int()),	
				'completionDate' => $this->typeRegistry->getByClassName(DateTimeType::class),	
			],
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		$token = $context->getToken() ?? '';
		return $this->addOffer->addOffer($token, $args['projectId'], $args['price'], $args['completionDate']);
    }


}