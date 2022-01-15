import '../Styles/About.css';
import 'animate.css';
import ytIcon from '../assets/yticon.png';
import instaIcon from '../assets/instaicon.png';
import githubIcon from '../assets/githubicon.png';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='animate__animated animate__fadeInDown'>A little about me:</h1>
            <p className='animate__animated animate__fadeIn'>
                Hi! I'm Agam and i love coding. I'm a self-taught web developer and
                as of August 2022 i'll be 18 years old. <br/>
                I play games with my friends during my free time, <br/>
                work out, or create web applications such as this website <br/>
                that you're using. I like drawing and im a big fan of Anime aswell. <br/>
                I excel at English and Math, and i love problem solving. <br/>
                Around August of 2021, i started my journey as a web developer <br/>
                by watching a 30 hour web-development course, which taught me about <br/>
                the internet, html, css, javascript, react, node, http/ajax, npm, the terminal <br/>
                and many more in-depth concepts about coding and web-development. <br/>
                Going through this long and complicated process has allowed me <br/>
                to gain more knowledge about a topic which fascinates me, which is computers. <br/>
                In addition, after completing the course i gained a number of remarkable marketable skills. <br/>
                I learned front-end development to it's very core and understood the core principles of it <br/>
                such as compatibility, responsiveness, design, UI and UX. <br/>
                However, i still think that i should tackle many different areas of coding & programming <br/>
                such as game development, DevOps engineering, dynamic programming, back-end development, etc.<br/><br/>

                In the future, i intend to get recruited to a tech company as a software engineer.<br/>
                You could say that my dream is to eventually become successful and have financial freedom & stability,<br/>
                and through working hard on a subject i love, i intend to make that dream come true. <br/><br/>
                That's it from me! Thank you for checking out my portfolio website 😉
            </p>
            <div className='links-container animate__animated animate__fadeIn'>
                <div>
                    <a href='https://www.youtube.com/channel/UCwXrcNE36pme9H1nu9GOdMw'>
                        <img src={ytIcon}/>
                    </a>
                    <p>Youtube</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/agamfaraj/'>
                        <img src={instaIcon}/>
                    </a>
                    <p>Instagram</p>
                </div>
                <div>
                    <a href='https://github.com/AgamF'>
                        <img src={githubIcon}/>
                    </a>
                    <p>Github</p>
                </div>
            </div>
        </div>
    )
}

export default About;