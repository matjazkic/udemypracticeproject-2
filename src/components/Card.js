import React from "react";
import styles from './Card.module.css'


const Card = (props) => {

// uporabimo importan styles.card za style tega komponenta nato nastavimo props.className da preko props
// nastavimo className za poljubno komponento kjer je card uporabljen
    return (    
        <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card; 