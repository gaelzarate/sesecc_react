import logo from '../assets/home/SESECC_blanco.svg';

const Footer = () => {
    return(
        <div className="footer container-fluid">
            <div className="row">
                <div className="col-md-4 my-4">
                <div class=" px-lg-3 text-white text-start">
                    <div>
                        <h3 class=""><i class="bi bi-house"></i> Dirección</h3>
                        <div class="">
                            <h6>Colón No. 1128, Colonia Centro, Oaxaca de Juárez, Oaxaca.</h6>

                        </div>
                    </div>
                    
                    
                    <div>
                        <h3 class=""><i class="bi bi-telephone"></i> Teléfono</h3>
                        <div class="">
                            <h6>951 2066911</h6>
                            <h6>951 2063111</h6>

                        </div>
                    </div>
                    
                    <div>
                        <h3 class=""><i class="bi bi-envelope"></i> Correo electrónico</h3>
                        <div class="">
                            <h6>sesecc@oaxaca.gob.mx</h6>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div className="col-md-4 my-4">
                <div class=" text-white">
                    <h3>
                        Dependencias
                    </h3>
                    <ul class="dependencias">
                        <li><a target="_blank" href="https://www.osfeoaxaca.gob.mx/">Órgano Superior de Fiscalización del Estado de Oaxaca</a> </li>
                        <li><a target="_blank" href="http://fge.oaxaca.gob.mx/index.php/fiscalia-combate-a-la-corrupcion/">Fiscalía Especializada en Materia de Combate a la Corrupción</a></li>
                        <li><a target="_blank" href="http://www.contraloria.oaxaca.gob.mx/">Secretaría de la Contraloría y Transparencia Gubernamental</a></li>
                        <li><a target="_blank" href="https://www.tribunaloaxaca.gob.mx/">Poder Judicial del Estado de Oaxaca</a></li>
                        <li><a target="_blank" href="http://iaipoaxaca.org.mx/site/">Instituto Acceso a la Información Publica y Protección de Datos Personales del Estado de Oaxaca</a></li>
                        <li><a target="_blank" href="https://tjaoaxaca.gob.mx/">Tribunal de Justicia Administrativa del Estado de Oaxaca</a></li>
                    </ul>

                </div>
                </div>
                <div className="col-md-4">
                <div class=" text-white">
                    <img className="d-block w-80" src={logo} alt="imagen"/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer