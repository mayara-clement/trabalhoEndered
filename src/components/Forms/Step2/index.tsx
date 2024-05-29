import React from "react";

const Step2 = ({ formData, handleChange }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white  rounded-t-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Step 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Código cliente
          </label>
          <input
            type="text"
            name="codigoCliente"
            value={formData.codigoCliente}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Código cliente"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            CNPJ
          </label>
          <input
            type="text"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="CNPJ"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Razão social
          </label>
          <input
            type="text"
            name="razaoSocial"
            value={formData.razaoSocial}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Razão social"
          />
        </div>
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">
            Comercial
          </label>
          <input
            type="text"
            name="comercial"
            value={formData.comercial}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Comercial"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
