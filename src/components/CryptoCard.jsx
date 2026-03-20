function CryptoCard({ crypto, onSelect, toggleFavorite, isFavorite }) {
  return (
    <div className="card" onClick={() => onSelect(crypto.id)}>
      
      {/* ⭐ Favoritar */}
      <div
        className="favorite"
        onClick={(e) => {
          e.stopPropagation(); // evita abrir gráfico ao clicar na estrela
          toggleFavorite(crypto.id);
        }}
      >
        {isFavorite ? "⭐" : "☆"}
      </div>

      <img src={crypto.image} alt={crypto.name} width={50} />

      <h3>{crypto.name}</h3>

      <p>💲 {crypto.current_price}</p>

      <p
        style={{
          color:
            crypto.price_change_percentage_24h > 0
              ? "#22c55e"
              : "#ef4444"
        }}
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
}

export default CryptoCard;