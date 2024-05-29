import React from "react";

const Step1 = ({ formData, handleChange }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white  rounded-t-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Step 1</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Data e-mail recebido
          </label>
          <input
            type="text"
            name="dataEmailRecebido"
            value={formData.dataEmailRecebido}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Data e-mail recebido"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Protocolo
          </label>
          <input
            type="text"
            name="protocolo"
            value={formData.protocolo}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Protocolo"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Status da implantação
          </label>
          <input
            type="text"
            name="statusImplantacao"
            value={formData.statusImplantacao}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Status da implantação"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Migração ou venda nova
          </label>
          <input
            type="text"
            name="migracaoOuVenda"
            value={formData.migracaoOuVenda}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Migração ou venda nova"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
