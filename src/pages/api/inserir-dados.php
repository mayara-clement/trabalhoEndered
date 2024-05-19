<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Para lidar com solicitações OPTIONS (pré-vôo)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Conexão com o banco de dados
$host = "localhost";
$user = "root";
$password = "";
$database = "endered";

$conn = new mysqli($host, $user, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die(json_encode(array("error" => "Falha na conexão com o banco de dados: " . $conn->connect_error)));
}

// Verifica se o método da requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed"));
    exit;
}

// Obtém os dados enviados pelo formulário
$data = json_decode(file_get_contents("php://input"), true);

// Extrai os dados
$protocolo = $data['protocolo'] ?? '';
$dataEmailRecebido = $data['dataEmailRecebido'] ?? '';
$migracaoOuVenda = $data['migracaoOuVenda'] ?? '';
$codigoCliente = $data['codigoCliente'] ?? '';
$cnpj = $data['cnpj'] ?? '';
$razaoSocial = $data['razaoSocial'] ?? '';
$comercial = $data['comercial'] ?? '';
$responsavel = $data['responsavel'] ?? '';
$telefone = $data['telefone'] ?? '';
$clienteContatado = $data['clienteContatado'] ?? '';
$planilhasImportadas = $data['planilhasImportadas'] ?? '';
$cartoesLoteGerados = $data['cartoesLoteGerados'] ?? '';
$dataEntrega = $data['dataEntrega'] ?? '';
$dataFinalizacaoProcesso = $data['dataFinalizacaoProcesso'] ?? '';
$inclusao = $data['inclusao'] ?? '';
$reemissaoAlteracao = $data['reemissaoAlteracao'] ?? '';
$cancelamento = $data['cancelamento'] ?? '';
$prazoProcesso = $data['prazoProcesso'] ?? '';
$dentroDoPrazo = $data['dentroDoPrazo'] ?? '';
$implantado = $data['implantado'] ?? '';

// Insere os dados no banco de dados
$query = "INSERT INTO processo (
    protocolo, dataEmailRecebido, migracaoOuVenda, codigoCliente, cnpj, razaoSocial, comercial, responsavel, telefone, 
    clienteContatado, planilhasImportadas, cartoesLoteGerados, dataEntrega, dataFinalizacaoProcesso, inclusao, 
    reemissaoAlteracao, cancelamento, prazoProcesso, dentroDoPrazo, implantado
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($query);
$stmt->bind_param(
    "ssssssssssssssssssss", 
    $protocolo, $dataEmailRecebido, $migracaoOuVenda, $codigoCliente, $cnpj, $razaoSocial, $comercial, $responsavel, 
    $telefone, $clienteContatado, $planilhasImportadas, $cartoesLoteGerados, $dataEntrega, $dataFinalizacaoProcesso, 
    $inclusao, $reemissaoAlteracao, $cancelamento, $prazoProcesso, $dentroDoPrazo, $implantado
);

if ($stmt->execute()) {
    echo json_encode(array("message" => "Dados inseridos com sucesso!"));
} else {
    echo json_encode(array("error" => "Erro ao inserir os dados: " . $stmt->error));
}

$stmt->close();
$conn->close();
?>
