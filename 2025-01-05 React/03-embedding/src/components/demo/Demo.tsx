import './Demo.css';
export default function Demo(): JSX.Element {
    const name = 'Kfir';
    const dogs:string[] = ['Bulldog', 'Beagle', 'Labrador'];
    const age = 25;
    const isAduld = false;
    const grades: number[] = [100, 90, 80, 70, 60];

    const dogsOnTable = [
        {
            name: 'Bulldog',
            age: 5
        },
        {
            name: 'Beagle',
            age: 2
        },
        {
            name: 'Labrador',
        }
    ]

    function sayHi() {
        alert('Hi');
    }

    // JSX - Murkup language that looks like HTML but is actually JavaScript
    return (
        <div className="Demo">
            <p>Hello {name}</p>
            <p>My favorite dogs are:</p>
            <ul>
                {dogs.map((dog, index) => (
                    <li key={index}>{dog}</li>
                ))}
            </ul>
            <p>My age is {age} years old</p>
            <p>Is adult: {isAduld ? 'Adult' : 'Child'}</p>

            <p>My grades are:</p>
            <ul>
                {grades.map((grade, index) => (<li key={index}>{grade}</li>))}
            </ul>
            <button onClick={sayHi}>Click me</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {dogsOnTable.map((dog, index) => (
                        <tr key={index}>
                            <td>{dog.name}</td>
                            <td>{dog.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}