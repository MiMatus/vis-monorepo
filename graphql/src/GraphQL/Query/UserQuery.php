<?php declare(strict_types=1);

namespace App\GraphQL\Query;

use App\GraphQL\TypeRegistry;
use GraphQL\Type\Definition\ResolveInfo;
use App\GraphQL\Context;
use App\GraphQL\Type\UserType;
use SkillShare\QueryObject\UserQuery as QueryObjectUserQuery;
use SkillShare\Repository\UserRepository;

final class UserQuery
{

	private TypeRegistry $typeRegistry;

	private UserRepository $userRepository;

	private QueryObjectUserQuery $userQuery;

	public function __construct(
		TypeRegistry $typeRegistry,
		UserRepository $userRepository,
		QueryObjectUserQuery $userQuery
	) {
		$this->typeRegistry = $typeRegistry;
		$this->userQuery = $userQuery;
		$this->userRepository = $userRepository;
	}

	public function getDefinition(): array
	{
		return [
			'type' => $this->typeRegistry->getByClassName(UserType::class),
			'resolve' => [$this, 'resolve']
		];
	}    

    public function resolve($source, array $args, Context $context, ResolveInfo $info)
    {
		$token = $context->getToken();
		if($token === null){
			throw new \GraphQL\Error\UserError('Missing token');
		}

		$user = $this->userRepository->find($this->userQuery->withTokenCond($token));
		return $user;
    }


}