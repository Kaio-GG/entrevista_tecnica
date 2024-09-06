import React, { useState } from 'react';
import './index.scss';

const FiltroTexto: React.FC = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState<number | null>(1);

  const selecionarFiltro = (filtro: number) => {
    setFiltroSelecionado(filtro);
  };

  return (
    <main className="cp-filtro-texto">
      <section className={filtroSelecionado === 1 ? 'card marcar' : 'card no-marcado'} onClick={() => selecionarFiltro(1)}>
        CELULAR
      </section>
      <section className={filtroSelecionado === 2 ? 'card marcar' : 'card no-marcado'} onClick={() => selecionarFiltro(2)}>
        ACESSÓRIOS
      </section>
      <section className={filtroSelecionado === 3 ? 'card marcar' : 'card no-marcado'} onClick={() => selecionarFiltro(3)}>
        TABLETS
      </section>
      <section className={filtroSelecionado === 4 ? 'card marcar' : 'card no-marcado'} onClick={() => selecionarFiltro(4)}>
        NOTEBOOKS
      </section>
      <section className={filtroSelecionado === 5 ? 'card marcar' : 'card no-marcado'} onClick={() => selecionarFiltro(5)}>
        TVS
      </section>
      <section className={filtroSelecionado === 6 ? 'card marcar' : 'card no-marcado'} onClick={() => selecionarFiltro(6)}>
        VER TODOS
      </section>
    </main>
  );
};

export default FiltroTexto;
