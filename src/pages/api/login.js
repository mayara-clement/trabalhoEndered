import db from "../../../lib/knex";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Método não permitido
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const user = await db("usuarios").where({ username }).first();

    if (user) {
      if (user.password === password) {
        res.status(200).json({ message: "Login bem sucedido" });
      } else {
        res.status(401).json({ error: "Senha incorreta" });
      }
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
  }
}
