import { useEffect, useState } from 'react';
import './Demo.css';
export default function Demo(): JSX.Element {

    const [animals, setAnimals] = useState<string[]>([]);
    const [isDogs, setIsDogs] = useState<boolean>(true);

    function getDogs(){
        return ['Bulldog', 'Poodle', 'Labrador', 'Pug', 'Beagle']
    }

    function getCats(){
        return ['Siamese', 'Persian', 'Maine Coon', 'Ragdoll', 'Bengal']
    }

    useEffect(() => {
        setAnimals(isDogs ? getDogs() : getCats());
    }, [ isDogs ])

    function selectChange(){
        setIsDogs(!isDogs);
    }
    return (
        <div className="Demo">
            <select onChange={selectChange}>
                <option>dog</option>
                <option>cat</option>
            </select>

            <ul>
                {animals.map(animal => <li key={animal}>{animal}</li> )}
            </ul>
        </div>
    )
}