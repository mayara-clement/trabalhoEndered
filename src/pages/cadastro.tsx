import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Redirecionar para a página de login após o cadastro bem-sucedido
        router.push("/");
      } else {
        setErrorMessage(data.error || "Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      setErrorMessage("Erro ao conectar ao servidor. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              Username
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Coloque seu usuário"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Senha
            </label>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Coloque sua senha"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Cadastre-se
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <Link href="/">
            <span className="text-blue-500 hover:text-blue-700">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
