"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

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

const Forms = () => {
  const router = useRouter();
  const { cliente } = router.query;

  const [formData, setFormData] = useState({
    protocolo: "",
    dataEmailRecebido: "",
    protocoloPrimaria: 0,
    statusImplantacao: "",
    migracaoOuVenda: "",
    codigoCliente: 0,
    cnpj: "",
    razaoSocial: "",
    comercial: "",
    responsavel: "",
    telefone: 0,
    clienteContatado: 0,
    planilhasImportadas: 0,
    cartoesLoteGerados: 0,
    dataEntrega: "",
    dataFinalizacaoProcesso: "",
    inclusao: 0,
    reemissaoAlteracao: 0,
    cancelamento: 0,
    prazoProcesso: 0,
    dentroDoPrazo: "",
    implantado: "",
    observacao: "",
    motivoNaoMigracao: ""
  });

  const [isEdit, setIsEdit] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (cliente) {
      const clienteString = Array.isArray(cliente) ? cliente[0] : cliente;
      const clienteData = JSON.parse(clienteString);
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...clienteData
      }));
      setIsEdit(true);
    }
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = isEdit ? "PUT" : "POST";

    fetch(`/api/${isEdit ? "atualizar-dados" : "inserir-dados"}`, {
      method: method,
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Erro ao ${isEdit ? "atualizar" : "enviar"} os dados.`);
      })
      .then((data) => {
        console.log(data);
        setFormData({
          protocolo: "",
          dataEmailRecebido: "",
          protocoloPrimaria: 0,
          statusImplantacao: "",
          migracaoOuVenda: "",
          codigoCliente: 0,
          cnpj: "",
          razaoSocial: "",
          comercial: "",
          responsavel: "",
          telefone: 0,
          clienteContatado: 0,
          planilhasImportadas: 0,
          cartoesLoteGerados: 0,
          dataEntrega: "",
          dataFinalizacaoProcesso: "",
          inclusao: 0,
          reemissaoAlteracao: 0,
          cancelamento: 0,
          prazoProcesso: 0,
          dentroDoPrazo: "",
          implantado: "",
          observacao: "",
          motivoNaoMigracao: ""
        });
        if (isEdit) {
          setIsEdit(false);
        }
        router.push("/listagem");
      })
      .catch((error) => {
        console.error("Houve um problema com a solicitação fetch:", error);
      });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} />
        )}
        {step === 3 && (
          <Step3 formData={formData} handleChange={handleChange} />
        )}
        {step === 4 && (
          <Step4 formData={formData} handleChange={handleChange} />
        )}

        <div className="flex flex-col justify-between bg-white rounded-b-lg shadow-md p-8 !mt-0 gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="py-2 w-full px-4 h-12 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none ">
              Anterior
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={nextStep}
              className="py-2 px-4 w-full border h-12 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7fc2e4]  focus:outline-none ">
              Próximo
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="py-2 px-4 border w-full h-12 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              {isEdit ? "Atualizar" : "Enviar"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Forms;
