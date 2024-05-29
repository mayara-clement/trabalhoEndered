import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, status } = useSession();
  const loading = status === "loading";

  console.log("@@session", session);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/listagem");
    }
  }, [session, router]);

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password
    });

    if (result?.error) {
      alert(result.error || "Erro ao fazer login");
    } else {
      router.push("/");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (session) {
    return (
      <div>
        <h1>Você já está logado</h1>
        <button onClick={() => router.push("/listagem")}>Ir para Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
