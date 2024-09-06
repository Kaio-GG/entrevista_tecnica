import React from "react";
import './index.scss'
import Header from "../../components/header";
import NavegacaoTopicoCard from "../../components/navegacaoTopicosCard";
import TextoProdutoSelecionado from "../../components/textoProdutoSelecionado";
import FiltroTexto from "../../components/filtroTexto";
import CarrosselProdutos from "../../components/carrosselProdutos";
import CardParceiro from "../../components/cardParceiro";
import CardProdutoRelacionado from "../../components/cardProdutosRelacionados";
import CarrosselMarcas from "../../components/carrosselMarcas";
import Footer from "../../components/footer";


export default function Home(){

    return(
        <main className="pg-home">
            <Header/>
            <section className="container-topo-imagem">
                <div className="ajuste-espaco">
                    <h1 className="titulo">Venha conhecer nossas promoções</h1>
                    <h3 className="sub-titulo">50% Off nos produtos</h3>
                    <button className="btn-topo">Ver produto</button>
                </div>
            </section>
            <NavegacaoTopicoCard/>
            <TextoProdutoSelecionado/>
            <FiltroTexto/>
            <CarrosselProdutos/>
            
            <section className="parceiros-horizontal">
                <CardParceiro imagemUrl="/assets/image/imagemParceiros.svg"/>
                <CardParceiro imagemUrl="/assets/image/imagemParceiros.svg"/>
            </section>
            <section className="container-sub-titulo">
                <TextoProdutoSelecionado/>
                <p className="txt-ver-todos">Ver todos</p>
            </section>
            <section className="parceiros-horizontal">
                <CardProdutoRelacionado imagemUrl="/assets/image/imagemProdutos.svg"/>
                <CardProdutoRelacionado imagemUrl="/assets/image/imagemParceiros.svg"/>
            </section>
            <CarrosselMarcas/>
            <Footer/>
       </main>
    )
}