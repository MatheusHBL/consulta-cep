const CepResult = ({ data, error, loading }) => {
    if (loading) return <p className="text-center">🔄 Carregando...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!data) return null;
  
    return (
      <div className="border p-4 rounded mt-4 bg-gray-200 dark:bg-gray-700 dark:text-white">
        <h2 className="text-lg font-bold text-center">Endereço Encontrado:</h2>
        <p><strong>Logradouro:</strong> {data.logradouro}</p>
        <p><strong>Bairro:</strong> {data.bairro}</p>
        <p><strong>Cidade:</strong> {data.localidade}</p>
        <p><strong>Estado:</strong> {data.uf}</p>
      </div>
    );
  };
  
  export default CepResult;
  