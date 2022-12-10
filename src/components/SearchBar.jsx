import {useState} from "react";
import styles from './SearchBar.module.css';
import { Link } from "react-router-dom";

export default function SearchBar(props) {
   const {onSearch} = props;
   const [character, setCharacter] = useState("");

   const handleInput = (e) => {
      setCharacter(e.target.value);
   }

   return (
      <div className={styles.divSearch}>
         <input className={styles.input} type='search' value={character} onChange={handleInput}/>
         <Link to="/home">
            <button className={styles.btn} onClick={() => onSearch(character)}>Add</button>
         </Link>
      </div>
   );
}
