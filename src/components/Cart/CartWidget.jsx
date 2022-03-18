import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

function Widget() {
    return (
        <div>
            <FontAwesomeIcon icon="fa-shopping-cart" color='white' size='xl' className="icon"/>
        </div>
    )
}

export default Widget