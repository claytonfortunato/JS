function showCar (carroVelho, ...carroNovo) {
    console.log({carroVelho, carroNovo})
}

showCar("Celta", "Ferrari", "Velar", "Mustang")

const numbers = [1, 9, 10]
const combined = [2, 1, 4,...numbers]

console.log(combined)