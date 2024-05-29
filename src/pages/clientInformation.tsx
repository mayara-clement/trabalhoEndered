import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BaseLayout from "../components/BaseLayout";
import { FaUser, FaLock } from "react-icons/fa";

interface ClienteData {
  protocolo: number;
  dataEmailRecebido: string;
  migracaoOuVenda: string;
  codigoCliente: number;
  cnpj: string;
  razaoSocial: string;
  comercial: string;
  responsavel: string;
  telefone: number;
  clienteContatado: number;
  planilhasImportadas: number;
  cartoesLoteGerados: number;
  dataEntrega: string;
  dataFinalizacaoProcesso: string;
  inclusao: number;
  reemissaoAlteracao: number;
  cancelamento: number;
  prazoProcesso: number;
  dentroDoPrazo: string;
  implantado: string;
}

const getStatus = (cliente) => {
  console.log("@@cliente", cliente);
  const allFieldsFilled = Object.values(cliente).every(
    (value) => value !== null && value !== undefined && value !== ""
  );

  return allFieldsFilled ? "Concluído" : "Em Andamento";
};

const getStatusClass = (status: string) => {
  switch (status) {
    case "Em Andamento":
      return "bg-orange-500 text-white";
    case "Concluído":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

const downloadCSV = (clienteData) => {
  const headers = Object.keys(clienteData).join(",");
  const values = Object.values(clienteData).join(",");
  const csvContent = `data:text/csv;charset=utf-8,${headers}\n${values}`;
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `cliente_${clienteData.protocolo}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ClientInformation: React.FC = () => {
  const router = useRouter();
  const { cliente } = router.query;

  const [clienteData, setClienteData] = useState<ClienteData | null>(null);

  useEffect(() => {
    if (cliente) {
      const clienteString = Array.isArray(cliente) ? cliente[0] : cliente;
      setClienteData(JSON.parse(clienteString));
    }
  }, [cliente]);

  const handleEditClick = () => {
    router.push({
      pathname: "/novoCliente",
      query: { cliente: JSON.stringify(clienteData) }
    });
  };

  if (!clienteData) return <div className="text-center mt-8">Loading...</div>;

  return (
    <BaseLayout>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">
          Order #{clienteData.protocolo}
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Status</h3>
          <div className="flex flex-wrap gap-2">
            <button
              key={getStatus(clienteData)}
              className={`px-3 py-1 rounded ${getStatusClass(
                getStatus(clienteData)
              )}`}>
              {getStatus(clienteData)}
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Informações</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(clienteData).map(([key, value]) => (
              <div key={key} className="mb-4">
                <p className="font-semibold text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleEditClick}>
            Edit
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => downloadCSV(clienteData)}>
            Download
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ClientInformation;
