import CatList from '../cats/cats-list/CatList'
import DogList from '../dogs/dog-list/DogList'
import './PetStore.css'
export default function PetStore(){

    return (
        <div className = "petStore">
            <h1>Pet Store</h1>
            <h2>Cats</h2>
            <CatList />

            <h2>Dogs</h2>
            <DogList />
        </div>
    )
}