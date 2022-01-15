import '../Styles/Navbar.css';

const Navbar = ({ gotoHome, gotoAbout }) => {
    return (
        <div className='navbar'>
            <a onClick={gotoHome}>Home</a>
            <a onClick={gotoAbout}>About Me</a>
        </div>
    )
}

export default Navbar;