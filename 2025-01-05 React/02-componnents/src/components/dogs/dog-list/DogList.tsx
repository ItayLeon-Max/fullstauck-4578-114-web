import Junyor from "../junyor/Junyor";
import Noop from "../noop/Noop";
import './DogList.css';

export default function DogList(){
    return ( 
        <div className='DogList'>
            <Junyor />
            <Noop />
        </div>
    )
}