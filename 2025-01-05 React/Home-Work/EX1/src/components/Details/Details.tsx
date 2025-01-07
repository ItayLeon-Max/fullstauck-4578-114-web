import './Details.css';
import me1 from '../../assets/images/me1.jpg';
import me2 from '../../assets/images/me2.jpg';
import me3 from '../../assets/images/me3.jpg';

export default function Details() {
const myImages = [me1, me2, me3];
const randomImage = myImages[Math.floor(Math.random() * myImages.length)];

    return (
        <div className="DetailsContainer">
            <h1>My name is Itay Leon</h1>
            <p>I am a software engineer</p>
            <p>I have experience in web development</p>
            <img src={randomImage} alt='MyPhotos' />
        </div>
    ); 
}