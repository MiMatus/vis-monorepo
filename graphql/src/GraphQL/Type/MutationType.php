<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use App\GraphQL\Mutation\AddOfferMutation;
use App\GraphQL\Mutation\AddReviewMutation;
use App\GraphQL\Mutation\CreateProjectMutation;
use GraphQL\Type\Definition\ObjectType;

class MutationType extends ObjectType
{
	public function __construct(\App\GraphQL\TypeRegistry $typeRegistry)
	{
        $config = [
            'name' => 'Mutations',
			'fields' => function () use ($typeRegistry){
				return [
					'createProject' => $typeRegistry->getByClassName(CreateProjectMutation::class)->getDefinition(),
					'addOffer' => $typeRegistry->getByClassName(AddOfferMutation::class)->getDefinition(),
					'addReview' => $typeRegistry->getByClassName(AddReviewMutation::class)->getDefinition(),
				];
			},
			'resolveField' => fn() => null
		];
		parent::__construct($config);
	}

}
