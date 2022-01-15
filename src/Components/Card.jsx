import '../Styles/Card.css';

const Card = ({ img, text, link }) => {
    return (
        <div className='card'>
            <a href={link}><img src={img} /></a>
            <a href={link}>{text}</a>
        </div>
    )
}

export default Card;