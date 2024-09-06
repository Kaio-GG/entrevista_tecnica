import './index.scss';

interface cardParceiroProps {
    imagemUrl: string
}


const CardProdutoRelacionado: React.FC<cardParceiroProps> = ({imagemUrl})=>{

    return(
        <main className='cp-card-parceiros' style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000), url(${imagemUrl})` }}>
            <h2 className='titulo'>Produto</h2>
            <p className='txt'>Lorem ipsum dolor sit amet, consectetur</p>
            <button className='btn-confira'>CONFIRA</button>
        </main>
    )
}



export default CardProdutoRelacionado;