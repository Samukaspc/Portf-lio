import './style.css';

export default function ButtonComponente({ text, onClick }) {
  return (
    <div className='body-button ' >
    <button onClick={onClick}>{text}</button>
    </div >
  );
}