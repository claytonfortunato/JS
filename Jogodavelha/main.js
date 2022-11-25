const cellElements = document.querySelectorAll("[data-cell]");

for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true });
}

const handleClick = () => {
    // Colocar a marca (X ou Circulo)
    const cell = e;
    // Verificar por vitória

    // Verificar por empate

    // Mudar símbolo
}