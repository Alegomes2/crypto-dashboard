import { useEffect, useState } from "react";
import { getCryptos } from "../services/api";
import CryptoList from "../components/CryptoList";
import SearchBar from "../components/SearchBar";
import PriceChart from "../components/PriceChart";
import "../styles/dashboard.css";

function Dashboard() {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  // 📈 moeda selecionada
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  // ⭐ favoritos
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getCryptos();
    setCryptos(data);
  };

  // 🔍 filtro
  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  // ⭐ adicionar/remover favorito
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="container">
      <h1>💰 Crypto Dashboard</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CryptoList
        cryptos={filteredCryptos}
        onSelect={setSelectedCrypto}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      {/* 📊 gráfico aparece quando clicar */}
      {selectedCrypto && (
        <div className="chart-container">
          <h2>📈 Histórico</h2>
          <PriceChart cryptoId={selectedCrypto} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;