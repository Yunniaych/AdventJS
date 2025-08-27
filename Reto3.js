//Reto #3: Organizando el inventario

//Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

//name: el nombre del juguete (string).
//quantity: la cantidad disponible de ese juguete (entero).
//category: la categoría a la que pertenece el juguete (string).
//Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

//Las claves del objeto serán las categorías de juguetes.
//Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
//Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
//Si el array está vacío, la función debe devolver un objeto vacío {}.

// @param {{ name: string, quantity: number, category: string }[]} inventory
// @returns {object} The organized inventory

function organizeInventory(inventory) {
  // Code here
  let organizedInventory = {}
  inventory.forEach((item) => {
    if(!Object.hasOwn(organizedInventory, item.category)){
      organizedInventory[item.category] = {}
    }
    if(!Object.hasOwn(organizedInventory[item.category], item.name)){
      organizedInventory[item.category][item.name] = item.quantity
    }else{
      organizedInventory[item.category][item.name] += item.quantity
    }
  })

  return organizedInventory 
}