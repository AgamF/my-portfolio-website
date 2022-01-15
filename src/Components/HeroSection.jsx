import 'animate.css';
import '../Styles/HeroSection.css';

const HeroSection = ({ gotoSkillset, gotoMyWork }) => {
    return (
        <div className='herosection-container'>
            <h1 className='animate__animated animate__fadeInDown'>Agam Farajpur</h1>
            <p className='animate__animated animate__fadeInUp'>Full-stack web developer.</p>
            <div className='button-container animate__animated animate__fadeInUp'>
                <button onClick={gotoMyWork}>Check out my work</button>
                <button onClick={gotoSkillset}>Skill set</button>
            </div>
        </div>
    )
}

export default HeroSection;