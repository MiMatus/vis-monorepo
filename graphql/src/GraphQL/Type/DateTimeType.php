<?php declare(strict_types=1);

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ScalarType;
use Nette\Utils\DateTime;
use GraphQL\Language\AST\StringValueNode;
use GraphQL\Error\Error;

final class DateTimeType extends ScalarType
{

	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * @param mixed $value
	 * @return string
	 */
	public function serialize($value)
	{
		if ($value instanceof DateTime) {
			return $value->format(DateTime::ATOM);
		} else {
			return (string) $value;
		}
	}

	public function parseValue($value)
	{
		return DateTime::from($value);
	}

	public function parseLiteral($valueNode, ?array $variables = null)
	{
		if (!$valueNode instanceof StringValueNode) {
			throw new Error('Query error: Can only parse strings got: ', $valueNode);
		}
		return DateTime::from($valueNode->value);
	}
}
