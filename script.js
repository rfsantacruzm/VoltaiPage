/*function calcular() {
    const capacidadPaneles = parseFloat(document.getElementById('capacidad-paneles').value);
    const horasSolPromedio = 5.6;
    const factorEmisionRed = 0.16438;

    const produccionSolarAnual = capacidadPaneles * horasSolPromedio * 365;
    const emisionesEvitadas = produccionSolarAnual * factorEmisionRed;

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Producción de energía solar anual: ${produccionSolarAnual.toFixed(2)} kWh</p>
        <p>Emisiones evitadas: ${emisionesEvitadas.toFixed(2)} kg CO2</p>
    `;
}*/
/*
// Función para calcular la producción de energía solar
function calcularProduccionSolar(capacidadPaneles, horasSolPromedio) {
    const diasEnUnAnio = 365;
    return capacidadPaneles * horasSolPromedio * diasEnUnAnio;
}

// Función para calcular las emisiones evitadas
function calcularEmisionesEvitadas(produccionSolar, factorEmisionRed, consumoUsuario) {
    // Calculamos las emisiones evitadas usando el consumo ingresado por el usuario
    const emisionesEvitadas = (produccionSolar - consumoUsuario) * factorEmisionRed;
    return emisionesEvitadas;
}

function calcular() {
    const capacidadPaneles = parseFloat(document.getElementById('capacidad-paneles').value);
    const horasSolPromedio = 5.6; // horas (promedio corregido)
    const factorEmisionRed = 0.16438; // kg CO2/kWh (valor actualizado)
    const consumoUsuario = parseFloat(document.getElementById('consumo-usuario').value);

    const produccionSolarAnual = calcularProduccionSolar(capacidadPaneles, horasSolPromedio);
    const emisionesEvitadas = calcularEmisionesEvitadas(produccionSolarAnual, factorEmisionRed, consumoUsuario);

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Producción de energía solar anual: ${produccionSolarAnual.toFixed(2)} kWh</p>
        <p>Emisiones evitadas: ${emisionesEvitadas.toFixed(2)} kg CO2</p>
    `;
}*/
// Función para calcular la producción de energía solar
function calcularProduccionSolar(capacidadPaneles, horasSolPromedio) {
    const diasEnUnAnio = 365;
    return capacidadPaneles * horasSolPromedio * diasEnUnAnio;
}

// Función para calcular las emisiones evitadas
function calcularEmisionesEvitadas(produccionSolar, factorEmisionRed, consumoUsuario) {
    // Calculamos las emisiones evitadas usando el consumo ingresado por el usuario
    const emisionesEvitadas = (produccionSolar - consumoUsuario) * factorEmisionRed;
    return emisionesEvitadas;
}

function actualizarResultados() {
    const capacidadPaneles = parseFloat(document.getElementById('capacidad-paneles').value);
    const horasSolPromedio = 5.6; // horas (promedio corregido)
    const factorEmisionRed = 0.16438; // kg CO2/kWh (valor actualizado)
    const consumoUsuario = parseFloat(document.getElementById('consumo-usuario').value);

    const produccionSolarAnual = calcularProduccionSolar(capacidadPaneles, horasSolPromedio);
    const emisionesEvitadas = calcularEmisionesEvitadas(produccionSolarAnual, factorEmisionRed, consumoUsuario);

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Producción de energía solar anual: ${produccionSolarAnual.toFixed(2)} kWh</p>
        <p>Emisiones evitadas: ${emisionesEvitadas.toFixed(2)} kg CO2</p>
    `;
}

// Escuchar el evento input en los campos de entrada
document.getElementById('capacidad-paneles').addEventListener('input', actualizarResultados);
document.getElementById('consumo-usuario').addEventListener('input', actualizarResultados);

// Calculamos los resultados iniciales al cargar la página
actualizarResultados();
