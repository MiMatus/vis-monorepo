<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use SkillShare\Service\ICreateProjectResult;
use GraphQL\Type\Definition\EnumType;

final class CreateProjectResultType extends EnumType implements ICreateProjectResult
{
	public function __construct()
	{
		$config = [
			'values' => [
				self::SUCCESS,
				self::ERROR,
				self::UNAVAILABLE_SUPPLIER,
				self::UNAUTHORIZED,
			],
		];
		parent::__construct($config);
	}

}


