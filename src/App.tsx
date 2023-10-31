import {useEffect, useState} from "react";
import Navigation from "./assets/components/Navigation.tsx"
import WelcomePage from "./assets/site/WelcomePage.tsx";
import CharacterGallery from "./assets/components//CharacterGallery.tsx";
import {Character} from "./assets/components/Character.tsx";
import CharacterDetails from "./assets/components/CharacterDetails.tsx";
import AddCharacter from "./assets/components/AddCharacter.tsx";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

export default function App() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        loadCharacters();
    }, []);

    function loadCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results); // Tippfehler korrigiert
            })
            .catch((error) => {
                console.error("Die Daten konnten nicht angezeigt werden");
                console.error(error.response ? error.response.status : error.message);
            });
    }

    function saveCharacter(characterToSave: Character) {
        setCharacters([...characters, characterToSave]);
    }

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<WelcomePage/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/add"} element={<AddCharacter saveCharacter={saveCharacter}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetails characters={characters}/>}/>
            </Routes>
        </>
    );
}