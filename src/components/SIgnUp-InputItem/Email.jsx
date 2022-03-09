import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Email() {
    return (
        <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="text" />
        </div>
    )
}