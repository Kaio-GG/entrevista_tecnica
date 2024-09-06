import React, { useEffect, useState, useRef } from 'react';
import './index.scss';
import { carregarProduto } from '../../api/produtoApi';
import CardDetalheCompra from '../cardDetalheCompra';
import { formatarMoeda } from '../../services';



interface Produto {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

const CarrosselProdutos: React.FC = () => {
    const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null); 
    const carrosselRef = useRef<HTMLDivElement>(null);

    async function produto() {
        let a = await carregarProduto();
        setListaProdutos(a);
    }


    function calcular2vezes(valor: number): string {
        let valorMetade: number = valor / 2 / 100;
        return formatarMoeda(valorMetade * 100);
    }

    function calcularDesconto(valor: number): number {
        let valorDesconto: number = valor * 0.93;
        return valorDesconto
    }

    function moverCarrossel(direcao: "esquerda" | "direita") {
        if (carrosselRef.current) {
            const scroll = carrosselRef.current.clientWidth;
            if (direcao === "esquerda") {
                carrosselRef.current.scrollBy({ left: -scroll, behavior: "smooth" });
            } else {
                carrosselRef.current.scrollBy({ left: scroll, behavior: "smooth" });
            }
        }
    }

    const abriDetalheProduto = (produto: Produto) => {
        setProdutoSelecionado(produto); 
    };

    const fecharDetalhe = () => {
        setProdutoSelecionado(null); 
    };

    useEffect(() => {
        produto();
    }, []);

    return (
        <main className='cp-carrossel'>
            <button className='btn-setaEsquerda' onClick={() => moverCarrossel("esquerda")}></button>
            <div className='carrossel-container' ref={carrosselRef}>
                {listaProdutos.map((prod, index) => (
                    <section key={index} className='card-carrossel'>
                        <img src={prod.photo} alt={prod.productName} />
                        <p className='descricao'>{prod.productName}</p>
                        <p className='valor-real'>{formatarMoeda(prod.price)}</p>
                        <p className='valor-desconto'>{formatarMoeda(calcularDesconto(prod.price))}</p>
                        <p className='tx-parcela'>ou 2x de {calcular2vezes(prod.price)} sem juros</p>
                        <p className='tx-fretegratis'>Frete grátis</p>
                        <button className='btn-comprar' onClick={() => abriDetalheProduto(prod)}>COMPRAR</button>
                    </section>
                ))}
            </div>
            <button className='btn-setaDireita' onClick={() => moverCarrossel("direita")}></button>
            {produtoSelecionado && (
                <CardDetalheCompra
                    aofechar={fecharDetalhe}
                    imagemUrl={produtoSelecionado.photo}
                    preco={calcularDesconto(produtoSelecionado.price)}
                    nome={produtoSelecionado.productName}
                    descricao={produtoSelecionado.descriptionShort}
                />
            )}
        </main>
    );
}

export default CarrosselProdutos;
