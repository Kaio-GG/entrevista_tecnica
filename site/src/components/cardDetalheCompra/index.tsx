import React, { useState, useEffect } from 'react';
import './index.scss';
import { formatarMoeda } from '../../services';



interface DetalheProps {
    aofechar: () => void;
    imagemUrl: string;
    nome: string;
    descricao: string;
    preco: number;
}

const CardDetalheCompra: React.FC<DetalheProps> = ({ aofechar, imagemUrl, nome, descricao, preco }) => {
    const [quantidade, setQuantidade] = useState<number>(1);
    const [valor, setValor] = useState<number>(preco);
    
    function aumentarQtd() {
        setQuantidade(quantidade + 1);
    }

    function diminuirQtd() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    useEffect(()=>{
        setValor(quantidade* preco);
    },[quantidade])

    return (
        <main className='cp-card-detalhe-compra'>
            <section className="caixa">
                <section>
                    <img src={imagemUrl} alt="Imagem do produto" />
                </section>
                <section className="org-direita">
                    <h1>{nome}</h1>
                    <h2>{formatarMoeda(valor)}</h2>
                    <p className="txt-desc">{descricao}</p>
                    <p className="txt-veja-mais">Veja mais detalhes do produto &gt;</p>
                    <div className="btn-aumentar-diminuir">
                        <img src="/assets/image/minus.svg" alt="Diminuir quantidade" onClick={diminuirQtd} />
                        <div className='qtd'>{quantidade}</div>
                        <img src="/assets/image/plus.svg" alt="Aumentar quantidade" onClick={aumentarQtd} />
                    </div>
                    <button>COMPRAR</button>
                </section>
            </section>
            <section className="part-3">
                <img className="x" src="/assets/image/cancel.svg" alt="Fechar" onClick={aofechar} />
            </section>
        </main>
    );
}

export default CardDetalheCompra;
