import './Produtos.css';

import bolsa from '../../assets/bolsa.png'
import note from '../../assets/portaNotebook.png'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>
                    Conheça nossos produtos e escolha o que mais combina com você!
                    Perfeitos para acompanhar você em todas as ocasiões,
                    nossos produtos são feitos com materiais de alta qualidade e design moderno.
                </p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="Sandália marrom" />
                            <span className='badge-venda'>Mais vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>R$ 349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="Sandália pink" />
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Pink</h3>
                            <p className='preco'>R$ 240,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt="Tamanco Marrom" />
                        </div>
                        <div className='card-info'>
                            <h3>Tamanco Marrom</h3>
                            <p className='preco'>R$ 120,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                     <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt="Tênis preto" />
                        </div>
                        <div className='card-info'>
                            <h3>Tênis Preto</h3>
                            <p className='preco'>R$ 360,50</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt="Bolsa vermelha" />
                        </div>
                        <div className='card-info'>
                            <h3>Bolsa Vermelha</h3>
                            <p className='preco'>R$ 500,70</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={note} alt="Porta notebook azul marinho" />
                        </div>
                        <div className='card-info'>
                            <h3>Porta Notebook Azul Marinho</h3>
                            <p className='preco'>R$ 170,99</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}