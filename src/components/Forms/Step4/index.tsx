import React from "react";

const Step4 = ({ formData, handleChange }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white  rounded-t-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Step 4</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Prazo do processo
          </label>
          <input
            type="text"
            name="prazoProcesso"
            value={formData.prazoProcesso}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Prazo do processo"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Dentro do prazo?
          </label>
          <input
            type="text"
            name="dentroDoPrazo"
            value={formData.dentroDoPrazo}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Dentro do prazo?"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Implantado?
          </label>
          <input
            type="text"
            name="implantado"
            value={formData.implantado}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Implantado?"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Observação
          </label>
          <input
            type="text"
            name="observacao"
            value={formData.observacao}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Observação"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Motivo não migração
          </label>
          <input
            type="text"
            name="motivoNaoMigracao"
            value={formData.motivoNaoMigracao}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Motivo não migração"
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
