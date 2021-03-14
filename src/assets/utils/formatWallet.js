const formatWallet = (value) => {
  const wallet = value?.replace(/-/gi, ' ')
  return wallet
}

export default formatWallet
