import './Skills.css';

export default function Skills() {
    const liSkills = ['HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Git'];
    return (
     <div className="skillsContainer">
    <h2>Skills</h2>
    <p>I have experience with the following technologies:</p>
    <ul>
        {liSkills.map((skill, index) => (<li key={index}>{skill}</li>))}
    </ul>
    </div>
    );
}