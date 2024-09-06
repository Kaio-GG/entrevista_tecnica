import React, { useRef } from 'react';
import './index.scss';

const CarrosselMarcas: React.FC = () => {
    const carrosselRef = useRef<HTMLDivElement>(null);

    const moverCarrossel = (direcao: 'esquerda' | 'direita') => {
        if (carrosselRef.current) {
            const scroll = carrosselRef.current.clientWidth;
            carrosselRef.current.scrollBy({
                left: direcao === 'direita' ? scroll : -scroll,
                behavior: 'smooth',
            });
        }
    };

    return (
        <main className='cp-carrossel-marcas'>
            <h1 className='titulo'>Navegue por marcas</h1>
            <section className='container-carrossel-seta'>
                <div className='container-carrossel' ref={carrosselRef}>
                    <div className='card'>
                        <img src='/assets/image/LogoVtex.svg' alt='' />
                    </div>
                    <div className='card'>
                        <img src='/assets/image/LogoVtex.svg' alt='' />
                    </div>
                    <div className='card'>
                        <img src='/assets/image/LogoVtex.svg' alt='' />
                    </div>
                    <div className='card'>
                        <img src='/assets/image/LogoVtex.svg' alt='' />
                    </div>
                    <div className='card'>
                        <img src='/assets/image/LogoVtex.svg' alt='' />
                    </div>
                </div>
                <div className='circle-seta direita' onClick={() => moverCarrossel('direita')}>
                    <img src='/assets/image/setaDireitaAzul.svg' alt='' />
                </div>
            </section>
        </main>
    );
};

export default CarrosselMarcas;
