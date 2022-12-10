import React from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.close} onClick={props.onClose}>X</button>
         <img className={styles.img} src={props.image} alt={props.name} />
         <div className={styles.details}>
            <Link to={`/detail/${props.id}`}>
               <h2 className={styles.name}>{props.name}</h2>
            </Link>
            <h3 className={styles.tag}>{props.species}</h3> 
            <h3 className={styles.tag}>{props.gender}</h3>
         </div>
      </div>
   );
}
