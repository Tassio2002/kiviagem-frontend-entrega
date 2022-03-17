import React from 'react';

import CellPhone from '../../assets/img/Cellphone.svg'
import '../../css/services.css'
const ServicesSection = () => {


    return ( 
        <section className='services'>
            <div className="services-desc">
                <h1>O que fazemos?</h1>

                <div className='services-container'>
                    <h3>Para onde ir?</h3>
                    <p>Isso mesmo, atravez de alguns filtros podemos te ajudar a definir qual o destino ideal para sua proxima viagem.</p>
                </div>

                <div className='services-container'>
                    <h3>Pacote Completo</h3>
                    <p>Não basta apenas saber para onde queremos ir, é preciso tbm, comprar as passagens, escolhoer a hospedagem, alugar veiculos e etc.. Vamos te ajudar em todo esse percurso.</p>
                </div>

                <div className='services-container'>
                    <h3>Melhor preço</h3>
                    <p>Após escolher todos os detalhes do seu pacote, vem a parte preocupant, quanto eu vou precisar desembolsar, a boa noticia é que voçe não precisa se preocupar, nós garantimos os melhores preços.</p>
                </div>

                <div className='services-container'>
                    <h3>Com você até o fim</h3>
                    <p>Não vamos te deixar após o pagamento, vamos continuar te acompanhando durante sua viagem, para te amparar no que for necessário.</p>
                </div>
            </div>

            <div className="img-container">
                <img src={CellPhone} alt="Mockup de um smartphone contendo o site atual na versão para dispositivos móveis." />
            </div>                          
        </section>
     );
}
 
export default ServicesSection;