import React from "react";


function formatarMoeda(valor: number): string {
    const valorAjustado = valor / 100;
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return formatador.format(valorAjustado);
}


export {formatarMoeda}