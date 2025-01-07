import { useEffect, useState } from 'react';
import './Demo.css';
export default function Demo() {

    // let time = new Date().toLocaleTimeString();
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(()=>{
        const intercalId = setInterval(() => {
            console.log('time updated');
            // time = new Date().toLocaleTimeString();
            setTime(new Date().toLocaleTimeString());
        },1000)
        return () => clearInterval(intercalId);
    }, []);

    return (
        <div className='Demo'>
            <p>time is {time}</p>

        </div>
    );
}