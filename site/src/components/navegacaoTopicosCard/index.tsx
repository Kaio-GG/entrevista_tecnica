import React from 'react';
import './index.scss';





const NavegacaoTopicoCard: React.FC = () =>{
    return(
        <main className='cp-navegacao-card'>
            <section className='card marcado'>
                <div className="img-mini-card">
                    <img src='/assets/image/monitorar-tablet-e-smartohone 1.svg' alt=''/>
                </div>
                <p>Tecnologia</p>    
            </section>
            <section className='card'>
                <div className="img-mini-card">
                    <img src='/assets/image/supermercados 1.svg' alt=''/>
                </div>
                <p>Supermercado</p>
            </section>
            <section className='card'>
                <div className="img-mini-card">
                    <img src='/assets/image/whiskey.svg' alt=''/>
                </div>
                <p>Bebidas</p>
            </section>
            <section className='card'>
                <div className="img-mini-card">    
                    <img src='/assets/image/ferramentas 1.svg' alt=''/>
                </div>
                <p>Ferramentas</p>
            </section>
            <section className='card'>
                <div className="img-mini-card">    
                    <img src='/assets/image/cuidados-de-saude 1.svg' alt=''/>
                </div>
                <p>Saúde</p>
            </section>
            <section className='card'>
                <div className="img-mini-card">    
                    <img src='/assets/image/corrida 1.svg' alt=''/>
                </div>
                <p>Esportes e Fitness</p>
            </section>
            <section className='card'>
                <div className="img-mini-card">    
                    <img src='/assets/image/moda 1.svg' alt=''/>
                </div>
                <p>Moda</p>
            </section>
        </main>
    )
}


export default NavegacaoTopicoCard;