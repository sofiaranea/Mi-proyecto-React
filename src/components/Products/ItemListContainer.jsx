import './itemListContainer.css'
import { useState, useEffect } from "react"
import { getFetch } from "../GetFetch/GetFetch"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className='contenedor-productos'>
            {productos.map((producto) => <div className='producto' key={producto.id}>
                                            <img src={producto.img}></img>
                                            <h5>{producto.nombre}</h5>
                                            <div>
                                                <p>Precio: ${producto.precio}</p>
                                            </div>
                                        </div>
            
            )}
        </div>
    )
}

export default ItemListContainer