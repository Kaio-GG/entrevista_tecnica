import React from 'react';
import './index.scss';






const Footer: React.FC = () =>{
    return(
        <main className='cp-footer'>
            <section className='news'>
                <div className='org-esquerda' >
                    <div className='institucional'>
                       <div className='opts-institucional'>
                            <h1>Sobre nós</h1>
                            <div>
                                <p>CONHEÇA</p>
                                <p>COMO COMPRAR</p>
                                <p>INDICAÇÃO E DESCONTO</p>
                            </div>
                                
                       </div>
                       <div className='org-logos-intitucional'>
                            <img src='/assets/image/logoFacebook.svg' alt=''/>
                            <img src='/assets/image/logoInstagram.svg' alt=''/>
                            <img src='/assets/image/logoYoutube.svg' alt=''/>
                        </div> 
                    </div>
                    <div className='infos-uteis'>
                        <h1>INFORMAÇÕES ÚTEIS</h1>
                        <div className='opts-infos-uteis'>
                            <p>FALE CONOSCO</p>
                            <p>DÚVIDAS</p>
                            <p>PRAZOS DE ENTREGA</p>
                            <p>FORMAS DE PAGAMENTO</p>
                            <p>POLÍTICA DE PRIVACIDADE</p>
                            <p>TROCAS E DEVOLUÇÕES</p>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/image/formas_pagto.svg" alt=""/>
                    </div>
                </div>
                <div className='org-direita'>
                    <div className="card-cadastre-se">
                        <div className='org-txts'>
                            <h1>CADASTRE-SE E RECEBA NOSSAS</h1>
                            <h2>NOVIDADES E PROMOÇÕES</h2>
                        </div>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <div className='org-btn-input'>
                            <input placeholder='SEU E-MAIL'/>
                            <button>OK</button>
                        </div>
                    </div>
                </div>

            </section>
            <section className='base-inferior'>
                <p>COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS.  
                É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.</p>
                <div className='logo-alinhamento'>
                    <img src='/assets/image/logoEnconverse.svg' alt='' />
                    <img src='/assets/image/vtexBranco.svg' alt='' />
                </div>
            </section>
        </main>
    )
}


export default Footer;