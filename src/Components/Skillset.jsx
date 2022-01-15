import '../Styles/Skillset.css';
import 'animate.css';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import gitbashLogo from '../assets/gitbash-logo.png';
import nodejsLogo from '../assets/nodejs-logo.jpg';
import pyLogo from '../assets/python-logo.png';
import gitLogo from '../assets/github-logo.png';

const Skillset = () => {
    return (
        <div className='skillset-buffer animate__animated animate__fadeIn'>
            <h1>My Skillset:</h1>
            <p>I am fluent at 2 Programming languages, <br/>
            JavaScript and Python; <br/>
            As well as 2 coding languages which are HTML and CSS. <br/>
            I'm also proficient at using the popular Javascript framework, React. <br/>
            I've used Node.js and Express.js to build server-side applications and web-apps. <br/>
            In addition, i use the Terminal to navigate, create, delete projects
            And upload projects to Github.
            </p>
            <div className='img-container'>
                <img alt='' src={htmlLogo}/>
                <img id='csslogo' alt='' src={cssLogo}/>
                <img alt='' src={jsLogo}/>
                <img alt='' src={reactLogo}/>
                <img alt='' src={gitbashLogo}/>
                <img alt='' src={nodejsLogo}/>
                <img alt='' src={pyLogo}/>
                <img alt='' src={gitLogo}/>
            </div>
        </div>
    )
}

export default Skillset;