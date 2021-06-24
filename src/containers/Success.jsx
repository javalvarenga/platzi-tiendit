import React,{useContext} from 'react'
import AppContext from '../context/AppContext'
import Map from "../components/Map"
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/containers/Success.css'

function Success() {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    
    const location = useGoogleAddress(buyer[buyer.length-1].address);

    return (
        
        <div>
            <div className="Success">
                <div className="Success-content">
                    <h2>{`${buyer[0].name}, Gracias por tu compra` }</h2>
                    <span>Tu pedido llegará en 3 dias a tu direccion:</span>
                    <div className="Success-map">
                        <Map data={location} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Success
