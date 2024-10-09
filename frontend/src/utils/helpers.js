export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('ar-EG', { style: 'currency', currency }).format(amount);
  };
  
  export const calculateProfit = (entryPrice, exitPrice, amount) => {
    return (exitPrice - entryPrice) * amount;
  };