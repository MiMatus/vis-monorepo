<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Service\IAddOfferResult;
use GraphQL\Type\Definition\EnumType;

final class AddOfferResultType extends EnumType implements IAddOfferResult
{
	public function __construct()
	{
		$config = [
			'values' => [
				self::SUCCESS,
				self::ERROR,
				self::HAS_ACCEPTED_OFFER,
				self::UNAUTHORIZED,
			],
		];
		parent::__construct($config);
	}

}


