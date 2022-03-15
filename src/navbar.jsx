import './navbar.css'
import './main.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);


function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_logo">
                    <div>
                    <FontAwesomeIcon icon="fa-store" color='white' size='xl' className="icon"/>
                    </div>
                    <p><a href="#">Mi tienda</a></p>
                </div>
                <div className="navbar_links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                </div>
            </div>
        </div>
    )
}

export default Navbar