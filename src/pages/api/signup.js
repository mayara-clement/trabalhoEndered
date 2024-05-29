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
    const existingUser = await db("usuarios").where({ username }).first();

    if (existingUser) {
      return res.status(409).json({ error: "Usuário já existe" });
    }

    // Inserir novo usuário
    await db("usuarios").insert({ username, password });

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
  }
}
