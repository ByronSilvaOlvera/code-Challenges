import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './header.css';
import Logo from "./logoCloud.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDownload} from '@fortawesome/free-solid-svg-icons'



class TituloPage extends React.Component{ 

    render(){
        return(
            <div className="titulo-contenido" >
                <div className="img-header">
                    <Image src={Logo} rounded id="id" />
                </div>
                <div className="btn-descarga-box" >
                    <Button variant="light" className="btn-descarga">
                        <FontAwesomeIcon icon={faDownload} id="icon-descarga" />
                        Descargar
                    </Button>
                </div>

            </div>
        )
    }
}

export default TituloPage;