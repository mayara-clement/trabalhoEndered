import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    protocolo: "",
    dataEmailRecebido: "",
    migracaoOuVenda: "",
    codigoCliente: "",
    cnpj: "",
    razaoSocial: "",
    comercial: "",
    responsavel: "",
    telefone: "",
    clienteContatado: "",
    planilhasImportadas: "",
    cartoesLoteGerados: "",
    dataEntrega: "",
    dataFinalizacaoProcesso: "",
    inclusao: "",
    reemissaoAlteracao: "",
    cancelamento: "",
    prazoProcesso: "",
    dentroDoPrazo: "",
    implantado: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/api/inserir-dados.php", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Erro ao enviar os dados.");
      })
      .then((data) => {
        console.log(data);
        if (data.message) {
          alert("Dados inseridos com sucesso!");
          setFormData({
            protocolo: "",
            dataEmailRecebido: "",
            migracaoOuVenda: "",
            codigoCliente: "",
            cnpj: "",
            razaoSocial: "",
            comercial: "",
            responsavel: "",
            telefone: "",
            clienteContatado: "",
            planilhasImportadas: "",
            cartoesLoteGerados: "",
            dataEntrega: "",
            dataFinalizacaoProcesso: "",
            inclusao: "",
            reemissaoAlteracao: "",
            cancelamento: "",
            prazoProcesso: "",
            dentroDoPrazo: "",
            implantado: ""
          });
        } else {
          alert("Erro ao inserir os dados: " + data.error);
        }
      })
      .catch((error) => {
        console.error("Houve um problema com a solicitação fetch:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Data e-mail recebido:</label>
        <input
          type="text"
          name="dataEmailRecebido"
          value={formData.dataEmailRecebido}
          onChange={handleChange}
          className="form-control"
          placeholder="Data e-mail recebido"
        />
      </div>
      <div className="form-group">
        <label>Protocolo:</label>
        <input
          type="text"
          name="protocolo"
          value={formData.protocolo}
          onChange={handleChange}
          className="form-control"
          placeholder="Protocolo"
        />
      </div>
      <div className="form-group">
        <label>Status da implantação:</label>
        <input
          type="text"
          name="statusImplantacao"
          value={formData.statusImplantacao}
          onChange={handleChange}
          className="form-control"
          placeholder="Status da implantação"
        />
      </div>
      <div className="form-group">
        <label>Migração ou venda nova:</label>
        <input
          type="text"
          name="migracaoOuVenda"
          value={formData.migracaoOuVenda}
          onChange={handleChange}
          className="form-control"
          placeholder="Migração ou venda nova"
        />
      </div>
      <div className="form-group">
        <label>Código cliente:</label>
        <input
          type="text"
          name="codigoCliente"
          value={formData.codigoCliente}
          onChange={handleChange}
          className="form-control"
          placeholder="Código cliente"
        />
      </div>
      <div className="form-group">
        <label>CNPJ:</label>
        <input
          type="text"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
          className="form-control"
          placeholder="CNPJ"
        />
      </div>
      <div className="form-group">
        <label>Razão social:</label>
        <input
          type="text"
          name="razaoSocial"
          value={formData.razaoSocial}
          onChange={handleChange}
          className="form-control"
          placeholder="Razão social"
        />
      </div>
      <div className="form-group">
        <label>Comercial:</label>
        <input
          type="text"
          name="comercial"
          value={formData.comercial}
          onChange={handleChange}
          className="form-control"
          placeholder="Comercial"
        />
      </div>
      <div className="form-group">
        <label>Nome responsável:</label>
        <input
          type="text"
          name="responsavel"
          value={formData.responsavel}
          onChange={handleChange}
          className="form-control"
          placeholder="Nome responsável"
        />
      </div>
      <div className="form-group">
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="form-control"
          placeholder="Telefone"
        />
      </div>
      <div className="form-group">
        <label>Cliente contatado:</label>
        <input
          type="text"
          name="clienteContatado"
          value={formData.clienteContatado}
          onChange={handleChange}
          className="form-control"
          placeholder="Cliente contatado"
        />
      </div>
      <div className="form-group">
        <label>Planilhas importadas:</label>
        <input
          type="text"
          name="planilhasImportadas"
          value={formData.planilhasImportadas}
          onChange={handleChange}
          className="form-control"
          placeholder="Planilhas importadas"
        />
      </div>
      <div className="form-group">
        <label>Cartões/lote gerados:</label>
        <input
          type="text"
          name="cartoesLoteGerados"
          value={formData.cartoesLoteGerados}
          onChange={handleChange}
          className="form-control"
          placeholder="Cartões/lote gerados"
        />
      </div>
      <div className="form-group">
        <label>Data entrega:</label>
        <input
          type="text"
          name="dataEntrega"
          value={formData.dataEntrega}
          onChange={handleChange}
          className="form-control"
          placeholder="Data entrega"
        />
      </div>
      <div className="form-group">
        <label>Data finalização processo:</label>
        <input
          type="text"
          name="dataFinalizacaoProcesso"
          value={formData.dataFinalizacaoProcesso}
          onChange={handleChange}
          className="form-control"
          placeholder="Data finalização processo"
        />
      </div>
      <div className="form-group">
        <label>Inclusão:</label>
        <input
          type="text"
          name="inclusao"
          value={formData.inclusao}
          onChange={handleChange}
          className="form-control"
          placeholder="Inclusão"
        />
      </div>
      <div className="form-group">
        <label>Reemissão/alteração:</label>
        <input
          type="text"
          name="reemissaoAlteracao"
          value={formData.reemissaoAlteracao}
          onChange={handleChange}
          className="form-control"
          placeholder="Reemissão/alteração"
        />
      </div>
      <div className="form-group">
        <label>Cancelamento:</label>
        <input
          type="text"
          name="cancelamento"
          value={formData.cancelamento}
          onChange={handleChange}
          className="form-control"
          placeholder="Cancelamento"
        />
      </div>
      <div className="form-group">
        <label>Prazo do processo:</label>
        <input
          type="text"
          name="prazoProcesso"
          value={formData.prazoProcesso}
          onChange={handleChange}
          className="form-control"
          placeholder="Prazo do processo"
        />
      </div>
      <div className="form-group">
        <label>Dentro do prazo?</label>
        <input
          type="text"
          name="dentroDoPrazo"
          value={formData.dentroDoPrazo}
          onChange={handleChange}
          className="form-control"
          placeholder="Dentro do prazo?"
        />
      </div>
      <div className="form-group">
        <label>Implantado?</label>
        <input
          type="text"
          name="implantado"
          value={formData.implantado}
          onChange={handleChange}
          className="form-control"
          placeholder="Implantado?"
        />
      </div>
      <div className="form-group">
        <label>Observação:</label>
        <input
          type="text"
          name="observacao"
          value={formData.observacao}
          onChange={handleChange}
          className="form-control"
          placeholder="Observação"
        />
      </div>
      <div className="form-group">
        <label>Motivo não migração:</label>
        <input
          type="text"
          name="motivoNaoMigracao"
          value={formData.motivoNaoMigracao}
          onChange={handleChange}
          className="form-control"
          placeholder="Motivo não migração"
        />
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
};

export default Forms;
