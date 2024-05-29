import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "endered"
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      protocolo,
      dataEmailRecebido,
      migracaoOuVenda,
      codigoCliente,
      cnpj,
      razaoSocial,
      comercial,
      responsavel,
      telefone,
      clienteContatado,
      planilhasImportadas,
      cartoesLoteGerados,
      dataEntrega,
      dataFinalizacaoProcesso,
      inclusao,
      reemissaoAlteracao,
      cancelamento,
      prazoProcesso,
      dentroDoPrazo,
      implantado
    } = req.body;
    const query = `
      INSERT INTO processo (protocolo, dataEmailRecebido, migracaoOuVenda, codigoCliente, cnpj, razaoSocial, comercial, responsavel, telefone, clienteContatado, planilhasImportadas, cartoesLoteGerados, dataEntrega, dataFinalizacaoProcesso, inclusao, reemissaoAlteracao, cancelamento, prazoProcesso, dentroDoPrazo, implantado)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const values = [
      protocolo,
      dataEmailRecebido,
      migracaoOuVenda,
      codigoCliente,
      cnpj,
      razaoSocial,
      comercial,
      responsavel,
      telefone,
      clienteContatado,
      planilhasImportadas,
      cartoesLoteGerados,
      dataEntrega,
      dataFinalizacaoProcesso,
      inclusao,
      reemissaoAlteracao,
      cancelamento,
      prazoProcesso,
      dentroDoPrazo,
      implantado
    ];
    const [result] = await db.query(query, values);
    res.status(200).json({ message: "Dados inseridos com sucesso!" });
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
    res.status(500).json({ error: "Erro ao inserir dados no banco de dados." });
  }
}
