import React from 'react';

import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../manager-state/counterSlice'

import { useState, useEffect  } from 'react';

import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCloud, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


export function Main(){ 

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [header, setHeader]       = useState('');
    const [primary, setPrimary]     = useState('');
    const [secondary, setSecondary] = useState('');
    const [third, setThird]         = useState('');


    const [msg, setMsg]  = useState('Conectando...!');

    const[txt1, setTxt1]  = useState('');
    const[txt2, setTxt2]  = useState('');
    const[txt3, setTxt3]  = useState('');
  

    useEffect(() => {    
        
    });


    async function addTexto(num){


        if(header){
            //console.log(header);
            let rs = await ApiCambioTexto(header);
            if(rs || rs.length > 0){

                dispatch(increment())                
                console.log(rs);
                if(count === 0){
                    
                    setPrimary(rs);
                    setTxt1('Anterior: * ' + header);
                }
                if( count === 1){            
                    setSecondary(rs);
                    setTxt2('Anterior: * ' + header);
                    
                }   
                if(count=== 2){            
                    setThird(rs);
                    setTxt3('Anterior: * ' + header);
                    
                }
                
                setHeader('');
            }
        }else{

            Swal.fire({
                title: 'Advertencia!',
                text: 'No ha ingresado texto..!',
                icon: 'info',
                confirmButtonText: 'info!'
              })
        }
    }

    async function ApiCambioTexto(texto) { 
        try {
            let url = 'http://localhost:8090/api/textchange/?texto='+texto;
            console.log(url);
            const response = await fetch(url);
            const json = await response.json();
            console.log(json, json.results);
            
            if(json.ok){
                //console.log(json.texto);
                setMsg('Conectado...!' );
                return json.texto;     
            }
            else{
               setMsg(json.error);
               return '';
            }
            
        } catch (error) {
            console.error(error);
            setMsg('Servido Web no encontrado' );
            return '';
        }

    }

    return(
        <div className="main-contenido" >
            <div className="text-input" >
                <div>
                    <input type="text" id="header-input" className="form-control " value={header}
                    onChange={ (e) => setHeader(e.target.value)} placeholder="Insert Text" />
                </div>
                <div>
                    <Button variant="primary" id="btn-send" 
                        onClick={() => addTexto(count)}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} id="icon-send"  className="active" />
                        Send
                    </Button>
                </div>

                {/* <div>
                    <Button variant = "primary" id="btn-send" 
                        onClick     = {() => dispatch(decrement())}
                    >
                        Send
                    </Button>
                </div>
                <span>{count}</span> */}

            </div>
            <div className="main-text-change" >
                <div className="body-text" >
                    <div className="result">
                        <div>
                            <h4>Result:</h4>
                        </div>
                    </div>
                    <div className="entro-text" >
                        <div className="texto-send-body" >                            
                            <div>
                                <input type="text" id="third-input" value={third} className="form-control "
                                onChange={ (e) => setThird(e.target.value)} placeholder="Third Text" 
                                 />
                                 <p>{ txt3 } </p>
                            </div>  
                            <div>
                                <input type="text"  id="secondary-input" value={secondary} className="form-control "
                                onChange={ (e) => setSecondary(e.target.value)} placeholder="Second Text" />
                                <p>{ txt2 }</p>
                            </div>  
                            <div>
                                <input  type="text" id="primary-input" value={primary} className="form-control "
                                onChange={ (e) => setPrimary(e.target.value)} placeholder="First Text"  />
                                <p >{ txt1 } </p>
                            </div>                       
                        <div>
                            <p className="msg-error"> 
                                <FontAwesomeIcon icon={faCloud} id="icon-descarga"  className="hidden" /> { msg } 
                            </p>
                        </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



