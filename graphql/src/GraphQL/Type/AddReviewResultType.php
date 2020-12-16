<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Service\IAddReviewResult;
use GraphQL\Type\Definition\EnumType;

final class AddReviewResultType extends EnumType implements IAddReviewResult
{
	public function __construct()
	{
		$config = [
			'values' => [
				self::SUCCESS,
				self::ERROR,
				self::DUPLICATE,
				self::UNAUTHORIZED,
			],
		];
		parent::__construct($config);
	}

}


