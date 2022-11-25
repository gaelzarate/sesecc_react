import mision from '../assets/quienes/mision.jpg'
import vision from '../assets/quienes/vision.jpg'

const MisionVision = () => {
    return(
        <>
        <div>
        <section id="mision" class="colorBG6 text-white">
                <div class="container mt-2 p-2">
                    <div class="row my-2">
                        <div class="col-lg-6">
                            <div class="info-left">
                                <img className="d-block w-100" src={mision} alt="mision" />
                                
                            </div>
                        </div>
                        <div class="col-lg-6 my-auto padre">
                            <div class="p-3">
                                <h1 class="">Misión</h1>
                                <p class="text-start">
                                    Proponer, ofrecer y promover políticas integrales, indicadores y mecanismos en materia de prevención, control y seguimiento de hechos de corrupción y faltas administrativas, coordinadamente con la comisión ejecutiva y el comité coordinador a fin de conseguir
                                    su efectiva disuasión, logrando la integridad y el comportamiento ético de los servidores públicos.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div>
        <section id="vision" class="bg-light">
        
                <div class="container p-2">
                    <div class="row my-2">
                        <div class="col-lg-6 padre">
                            <div class="p-3 text-lg-end">
                                <h1 class="color4">Visión</h1>
                                <p class="">
                                    Ser el organismo generador de los instrumentos necesarios que permitan medir, dar seguimiento y combatir los fenómenos de corrupción, difundiendo y aplicando las políticas integrales que garanticen a la ciudadanía oaxaqueña el debido ejercicio de los
                                    recursos públicos, con fundamento en los principios rectores del servicio público de legalidad, objetividad, profesionalismo, honradez, lealtad, imparcialidad, eficiencia, eficacia, equidad, transparencia, economía,
                                    integridad y competencia por mérito.
                                </p>

                            </div>
                        </div>
                        <div class="col-lg-6 my-auto">
                            <div class="">
                            <img className="d-block w-100" src={vision} alt="vision" />
                            </div>
                        </div>
                    </div>
                </div>
    
            </section>
        </div>
        </>
        
        
    )
}

export default MisionVision