//Reto #1: ¡Primer regalo repetido!

//Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
// y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

// @param {number[]} gifts - The array of gifts to prepare
// @returns {number[]} An array with the prepared gifts

function prepareGifts(gifts) {
  const preparedGifts = gifts. filter((gift, giftNumber, gifts) =>
  giftNumber === gifts.indexOf(gift))

  preparedGifts.sort((a, b) => a - b)
  return preparedGifts
}