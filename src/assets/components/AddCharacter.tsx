import { Character } from './Character.tsx';
import {useState} from "react";

interface AddCharacterProps {
    saveCharacter: (characterToSave: Character) => void;
}

export default function AddCharacter(props: AddCharacterProps) {
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [species, setSpecies] = useState<string>('');

    const handleSave = () => {
        const newCharacter: Character = {
            name,
            status,
            species,
        };
        props.saveCharacter(newCharacter);
    };

    return (
        <div>
            <h3>Add Character</h3>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Status:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </label>
            <br />
            <label>
                Species:
                <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} />
            </label>
            <br />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}
