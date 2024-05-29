import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaSearch, FaCheck, FaEdit } from "react-icons/fa";

const Listagem = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/dadosClientes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar dados dos clientes");
        }
        return response.json();
      })
      .then((data) => {
        console.log("@@data fetch", data);
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const getStatus = (cliente) => {
    const allFieldsFilled = Object.values(cliente).every(
      (value) => value !== null && value !== undefined && value !== ""
    );

    return allFieldsFilled ? "Concluído" : "Em Andamento";
  };

  const getStatusIcon = (status) => {
    return status === "Concluído" ? (
      <FaCheck
        className="text-green-500 bg-green-100 p-1 rounded-[8px] mr-2"
        size={32}
      />
    ) : (
      <FaEdit
        className="text-orange-500 bg-orange-100 p-1 rounded-[8px] mr-2"
        size={32}
      />
    );
  };

  const handleCardClick = (cliente) => {
    router.push({
      pathname: "/clientInformation",
      query: { cliente: JSON.stringify(cliente) }
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterData(e.target.value, statusFilter, startDate, endDate);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterData(search, status, startDate, endDate);
  };

  const handleDateChange = (e, type) => {
    const value = e.target.value;
    if (type === "start") {
      setStartDate(value);
      filterData(search, statusFilter, value, endDate);
    } else {
      setEndDate(value);
      filterData(search, statusFilter, startDate, value);
    }
  };

  const filterData = (search, status, start, end) => {
    let filtered = data;

    if (search) {
      filtered = filtered.filter((cliente) =>
        Object.values(cliente).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    if (status) {
      filtered = filtered.filter((cliente) => getStatus(cliente) === status);
    }

    if (start && end) {
      filtered = filtered.filter(
        (cliente) =>
          new Date(cliente.dataEmailRecebido) >= new Date(start) &&
          new Date(cliente.dataEmailRecebido) <= new Date(end)
      );
    }

    setFilteredData(filtered);
  };

  if (!data) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-8 mt-20">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Pesquise por nome, razão social ou outros campos"
            value={search}
            onChange={handleSearch}
            className="p-4 pl-10 border border-gray-300 rounded-full w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch
            className="absolute left-3 top-3 text-gray-400 mt-2"
            size={20}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-4 md:space-y-0">
          <div className="flex space-x-2">
            <button
              onClick={() => handleStatusFilter("")}
              className="px-4 py-2 bg-gray-500 text-white rounded-full">
              Todos
            </button>
            <button
              onClick={() => handleStatusFilter("Em Andamento")}
              className="px-4 py-2 bg-orange-500 text-white rounded-full">
              Em Andamento
            </button>
            <button
              onClick={() => handleStatusFilter("Concluído")}
              className="px-4 py-2 bg-green-500 text-white rounded-full">
              Concluído
            </button>
          </div>
          <div className="flex space-x-2 items-center">
            <label className="text-gray-700">Data Inicial:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => handleDateChange(e, "start")}
              className="p-2 border border-gray-300 rounded-full"
            />
            <label className="text-gray-700">Data Final:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => handleDateChange(e, "end")}
              className="p-2 border border-gray-300 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:bg-blue-200 transition duration-200"
            onClick={() => handleCardClick(item)}>
            <div className="flex items-center">
              {getStatusIcon(getStatus(item))}
              <div className="ml-4">
                <p className="text-lg font-semibold">{item.razaoSocial}</p>
                <p className="text-sm text-gray-600">CNPJ: {item.cnpj}</p>
                <p className="text-sm text-gray-600">
                  Protocolo: {item.protocolo}
                </p>
                <p className="text-sm text-gray-600">
                  Responsável: {item.responsavel}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("");
                }}
                className="text-blue-600 hover:text-blue-900">
                <img src="/right_arrow.svg" alt="Arrow icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listagem;
