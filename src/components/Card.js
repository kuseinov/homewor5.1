import './Card.css'
function Card({ avatarUrl, name, text, date }) {
  return (
    <div className="container">
      <div className=' Kitty'>
        <img src={avatarUrl} alt="fota" />
        <p>{name}</p>
      </div>
      <div className='text'>
        <p>{text}</p>
        <p>{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Card;
