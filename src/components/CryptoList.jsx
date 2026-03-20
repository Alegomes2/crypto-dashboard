import CryptoCard from "./CryptoCard";

function CryptoList({
  cryptos,
  onSelect,
  favorites,
  toggleFavorite
}) {
  return (
    <div className="grid">
      {cryptos.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          crypto={crypto}
          onSelect={onSelect}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(crypto.id)}
        />
      ))}
    </div>
  );
}

export default CryptoList;