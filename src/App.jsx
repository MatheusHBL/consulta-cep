import { useState } from "react";
import axios from "axios";
import CepForm from "./components/CepForm";
import CepResult from "./components/CepResult";

const App = () => {
  const [cepData, setCepData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchCep = async (cep) => {
    setLoading(true);
    setError("");
    setCepData(null);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        throw new Error("CEP não encontrado.");
      }
      setCepData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen flex flex-col items-center justify-center p-4`}>
      {/* Botão de Modo Escuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded"
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>

      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Consulta de CEP</h1>
        <CepForm onSearch={fetchCep} />
        <CepResult data={cepData} error={error} loading={loading} />
      </div>
    </div>
  );
};

export default App;
