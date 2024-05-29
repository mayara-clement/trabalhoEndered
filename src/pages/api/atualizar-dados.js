import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "endered"
});

export default async function handler(req, res) {
  if (req.method === "POST") {
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
      res
        .status(500)
        .json({ error: "Erro ao inserir dados no banco de dados." });
    }
  } else if (req.method === "PUT") {
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
        UPDATE processo
        SET
          dataEmailRecebido = ?,
          migracaoOuVenda = ?,
          codigoCliente = ?,
          cnpj = ?,
          razaoSocial = ?,
          comercial = ?,
          responsavel = ?,
          telefone = ?,
          clienteContatado = ?,
          planilhasImportadas = ?,
          cartoesLoteGerados = ?,
          dataEntrega = ?,
          dataFinalizacaoProcesso = ?,
          inclusao = ?,
          reemissaoAlteracao = ?,
          cancelamento = ?,
          prazoProcesso = ?,
          dentroDoPrazo = ?,
          implantado = ?
        WHERE protocolo = ?;
      `;
      const values = [
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
        implantado,
        protocolo
      ];
      const [result] = await db.query(query, values);
      res.status(200).json({ message: "Dados atualizados com sucesso!" });
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar dados no banco de dados." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
