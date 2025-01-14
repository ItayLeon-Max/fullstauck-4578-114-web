import './Loading.css';
import loading from  '../../../assets/images/loading.gif'

export default function Loading() {

    
    return (
        <div className='Loading'>
            <img src={loading} alt='loading'/>
        </div>
    )
}