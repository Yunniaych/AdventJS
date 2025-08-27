//Reto #2: Enmarcando nombres

//Reglas:

//Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
//Cada nombre debe estar en una línea, alineado a la izquierda.
//El marco está construido con * y tiene un borde de una línea de ancho.
//La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

// @param {string[]} names - Array of names to frame
// @returns {string} The framed names

function createFrame(names) {
  // Code here
  let longestLength = 0;
  names.forEach((name) => {
    if(name.length > longestLength){
      longestLength = name.length
    }
  })
  const border = '*'.repeat(longestLength + 4);
  const framed = names.map(name => "* " + name.padEnd(longestLength, ' ') + " *").join('\n');
  
  return border + '\n' + framed + '\n' + border
}
