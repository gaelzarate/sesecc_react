import organigrama from '../assets/quienes/organigrama3.png'
import organigramapdf from '../assets/pdf/organigrama.pdf'

const Estructura = () => {
    return(
        <div>
            <div class="">
                        
                        <div class="text-center px-lg-5 py-5">
                            <a href={organigramapdf} target="_blank"><img src={organigrama} alt="diagrama" className='d-block w-100' /></a>
                        </div>
                    </div>
        </div>
    )
}

export default Estructura