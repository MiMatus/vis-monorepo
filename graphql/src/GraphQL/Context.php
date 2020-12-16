<?php declare(strict_types=1);

namespace App\GraphQL;

class Context
{

	private array $headers;

	public function __construct(array $headers)
	{
		$this->headers = $headers;
	}

	public function getToken(): ?string
	{
		return $this->headers['HTTP_AUTHORIZATION'] ?? null;
	}
}
