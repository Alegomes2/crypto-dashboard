import axios from "axios";

// Criamos uma "instância" do axios com URL base
const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3"
});

/*
Função: buscar lista de criptomoedas
- vs_currency=usd → preços em dólar
- order=market_cap_desc → ordena por valor de mercado
*/
export const getCryptos = async () => {
  const response = await api.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc"
  );

  return response.data;
};

/*
Função: buscar histórico de preço
- days=7 → últimos 7 dias
*/
export const getCryptoHistory = async (id) => {
  const response = await api.get(
    `/coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  return response.data;
};