import React from "react";

const Step3 = ({ formData, handleChange }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white  rounded-t-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Step 3</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Nome responsável
          </label>
          <input
            type="text"
            name="responsavel"
            value={formData.responsavel}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nome responsável"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Telefone"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Cliente contatado
          </label>
          <input
            type="text"
            name="clienteContatado"
            value={formData.clienteContatado}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Cliente contatado"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Planilhas importadas
          </label>
          <input
            type="text"
            name="planilhasImportadas"
            value={formData.planilhasImportadas}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Planilhas importadas"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Cartões/lote gerados
          </label>
          <input
            type="text"
            name="cartoesLoteGerados"
            value={formData.cartoesLoteGerados}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Cartões/lote gerados"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Data entrega
          </label>
          <input
            type="text"
            name="dataEntrega"
            value={formData.dataEntrega}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Data entrega"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Data finalização processo
          </label>
          <input
            type="text"
            name="dataFinalizacaoProcesso"
            value={formData.dataFinalizacaoProcesso}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Data finalização processo"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Inclusão
          </label>
          <input
            type="text"
            name="inclusao"
            value={formData.inclusao}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Inclusão"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Reemissão/alteração
          </label>
          <input
            type="text"
            name="reemissaoAlteracao"
            value={formData.reemissaoAlteracao}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Reemissão/alteração"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Cancelamento
          </label>
          <input
            type="text"
            name="cancelamento"
            value={formData.cancelamento}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Cancelamento"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
