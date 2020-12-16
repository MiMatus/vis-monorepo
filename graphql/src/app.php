<?php declare(strict_types=1);

use App\GraphQL\Context;
use App\GraphQL\Type\MutationType;
use App\GraphQL\Type\QueryType;
use GraphQL\Type\Schema;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

//Option method is not supported by WEBONYX; End request and answer with HEADERS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	return;
}

$container = \App\Bootstrap::boot();

$raw = file_get_contents('php://input');
$data = $raw ? (json_decode($raw, true)) + ['query' => null, 'variables' => null]  : ['query' => null, 'variables' => null];

$parsedBody = (new \GraphQL\Server\Helper())->parseHttpRequest(fn() => $raw);


$appContext = new Context($_SERVER);

$typeRegistry = new \App\GraphQL\TypeRegistry($container);

$schema = new Schema([
    'query' => $typeRegistry->getByClassName(QueryType::class),
    'mutation' => $typeRegistry->getByClassName(MutationType::class),
    'typeLoader' => fn($name) => $typeRegistry->getByTypeName($name)
]);

echo json_encode((new \GraphQL\Server\StandardServer([
    'schema' => $schema,
    'context' => $appContext,
    'errorsHandler' => function(array $errors, callable $formatter) {
        foreach ($errors as $error) {
            echo (string)$error;
            \Tracy\Debugger::log((string)$error);
        }
    },
]))->executeRequest($parsedBody), \JSON_THROW_ON_ERROR | \JSON_UNESCAPED_UNICODE);
