import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx'

// import characters from './data.js'

function App () {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "juancruz.roldan19@gmail.com";
  const password = "1password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
    else
      alert("Invalid username or password");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // const onSearch = () => {
  //   const example = {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  };  
  //   setCharacters([
  //   ...characters,
  //   example
  //  ]);
  // }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No characters with this ID');
          }
       });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  return (
    <div className='App'>
      <div>
        {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
