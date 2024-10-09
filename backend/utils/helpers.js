exports.formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  exports.calculateProfit = (buyPrice, sellPrice, amount) => {
    return (sellPrice - buyPrice) * amount;
  };