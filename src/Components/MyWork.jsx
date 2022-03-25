import 'animate.css';
import '../Styles/MyWork.css';
import Card from './Card';
import robofriends from '../assets/robofriends.png';
import ziveini from '../assets/ziveini.png';
import bggen from '../assets/bgchanger.png';
import weightconv from '../assets/weightconv.png';
import landingpage from '../assets/portlandingpage.png';


const titles = {
    titleRobofriends: 'Robofriends',
    titleZiveini: 'Ziv Eini',
    titleBgchanger: 'Background Generator',
    titleWeightconverter: 'Weight Converter',
    titleLandingpage: 'Landing page'
}

const links = {
    linkRobofriends: 'https://robot-comrades.netlify.app',
    linkZiveini: 'https://ziveini.netlify.app',
    linkBgchanger: 'https://hexcolorchanger.netlify.app',
    linkWeightconverter: 'https://weight-converter-liard.vercel.app',
    linkLandingpage: 'https://agamf.github.io/portfolio-landing-page/'
}

const MyWork = () => {
    return (
        <div className='mywork-container animate__animated animate__fadeIn'>
            <h1>I've developed alot of websites, <br/>
            Here's some of my work:</h1>
            <div>
                <Card link={links.linkRobofriends} img={robofriends} text={titles.titleRobofriends}/>
                <Card link={links.linkZiveini} img={ziveini} text={titles.titleZiveini}/>
                <Card link={links.linkBgchanger} img={bggen} text={titles.titleBgchanger}/>
                <Card link={links.linkWeightconverter} img={weightconv} text={titles.titleWeightconverter}/>
                <Card link={links.linkLandingpage} img={landingpage} text={titles.titleLandingpage}/>
            </div>
        </div>
    )
}

export default MyWork;
