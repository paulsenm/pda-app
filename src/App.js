import 'bulma/css/bulma.css';

import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


console.log(AlexaImage);
console.log(SiriImage);

function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" 
                            handle="@alexa99"
                            image={AlexaImage}
                            content="Alexa helps you buy things on Amazon."
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            content="Made by microsoft - who knows."
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Seri" 
                            handle="@seri01" 
                            image={SiriImage}
                            content="Made by apple - being phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>
            
            
            
            
        </div>
    )
}

export default App;