const formatMoney = ({ money }) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(money)

export default formatMoney
