import { useEffect, useRef, useState } from 'react';
import './Demo.css';

export default function Demo(): JSX.Element{

    // useRef():
    /*
     useRef() is used to store mutable values that are not part of the component's state.
     The value of the ref is stored in the .current property.
     Syntax: const refContainer = useRef(initialValue);
     example:
        const inputRef = useRef<HTMLInputElement>(null);
        <input ref={inputRef} />
        inputRef.current.focus();
     */

    const startTime = useRef<string>(new Date().toLocaleTimeString());

    // useState():
    /*
    useState() is used to add state to function components.
    Syntax: const [state, setState] = useState(initialState);
    The first element of the array is the state value.
    The second element is a function to update the state.
    The initial state is passed as an argument to useState().
    example:
        const [count, setCount] = useState(0);
        <button onClick={() => setCount(count + 1)}>Increment</button>
     */

    const [currentTime, setCurrentTime] = useState<string>(startTime.current);

    // useEffect():
    /*
    useEffect() is used to perform side effects in function components.
    It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
    Syntax: useEffect(callback, [dependencies]);
    The callback function is called after the component is rendered.
    The second argument is an array of dependencies. If any of the dependencies change, the callback is called.
    If the dependencies array is empty, the callback is called only once after the component is rendered.

    example:
    useEffect(() => {
        console.log('component is rendered');
        }, []);
     */
    useEffect(() => {
        //initializing interval to update the time every second 
        const intervalId = setInterval(() => {
            console.log('updating time');
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        //cleanup function to clear the interval when the component is unmounted 
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return(
        <div className="demo">
            <p>start time: {startTime.current}</p>
            <p>current time: {currentTime}</p>
        </div>
    )
}