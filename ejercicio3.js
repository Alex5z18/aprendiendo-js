function getByIdx(arr, idx) {
    if (idx < 0) {
        return "Error: el índice no puede ser menor que cero.";
    }

    if (idx >= arr.length) {
        return "Error: el índice está fuera del rango del arreglo.";
    }

    return arr[idx];
}

// Ejemplo de uso
const colores = ["rojo", "verde", "azul", "amarillo"];

console.log(getByIdx(colores, 2));   // azul
console.log(getByIdx(colores, -1));  // Error: el índice no puede ser menor que cero.
console.log(getByIdx(colores, 10));  // Error: el índice está fuera del rango del arreglo.
