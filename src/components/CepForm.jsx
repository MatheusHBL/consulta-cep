import { useState } from "react";

const CepForm = ({ onSearch }) => {
  const [cep, setCep] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cep.length === 8) {
      onSearch(cep);
    } else {
      alert("Digite um CEP válido com 8 dígitos.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
        className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Buscar CEP
      </button>
    </form>
  );
};

export default CepForm;
