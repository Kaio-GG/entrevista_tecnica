import React, { useState } from 'react';
import './index.scss';

const Header: React.FC = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(6);

    const selecionarCategoria = (categoria: number) => {
        setCategoriaSelecionada(categoria);
    };

    return (
        <main className="cp-header">
            <section className="container-top-icons">
                <img src="/assets/image/logoCompraSeguro.svg" alt="" className="top-icons" />
                <img src="/assets/image/logoFreteGratis.svg" alt="" className="top-icons" />
                <img src="/assets/image/logoParceleSuasCompras.svg" alt="" className="top-icons" />
            </section>
            <section className="logo-input-btns">
                <img src="/assets/image/LogoVtex.svg" alt="" className="logo-vtex" />
                <div className="input-logoLupa">
                    <input className="input-search" placeholder="O que você está buscando?" />
                    <img src="/assets/image/logoLupa.svg" alt="" className="logo-lupa" />
                </div>
                <section className="icons-meio">
                    <img src="/assets/image/logoCaixaSeta.svg" alt="" className="logo-caixa" />
                    <img src="/assets/image/logoHeart.svg" alt="" className="logo-heart" />
                    <img src="/assets/image/logoUserCircle.svg" alt="" className="logo-user-circle" />
                    <img src="/assets/image/logoShoppingCart.svg" alt="" className="logo-shopping-cart" />
                </section>
            </section>
            <nav className="navegacao">
                <p className={categoriaSelecionada === 1 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(1)}>TODAS CATEGORIAS</p>
                <p className={categoriaSelecionada === 2 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(2)}>SUPERMERCADO</p>
                <p className={categoriaSelecionada === 3 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(3)}>LIVROS</p>
                <p className={categoriaSelecionada === 4 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(4)}>MODA</p>
                <p className={categoriaSelecionada === 5 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(5)}>LANÇAMENTO</p>
                <p className={categoriaSelecionada === 6 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(6)}>OFERTAS DO DIA</p>
                <p className={categoriaSelecionada === 7 ? 'marcar' : 'no-marcado'} onClick={() => selecionarCategoria(7)}>ASSINATURA</p>
            </nav>
        </main>
    );
};

export default Header;
