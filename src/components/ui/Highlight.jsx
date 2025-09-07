import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = (props) => {
    return (
        <div className="highlight">
                <figure className="highlight__img">
                <FontAwesomeIcon icon={props.img} />
                </figure>
                <h3 className="highlight__subtitle">{props.subtitle}</h3>
                <p className="highlight__para">{props.paragraph}</p>
    </div>
    )
}

export default Highlight;