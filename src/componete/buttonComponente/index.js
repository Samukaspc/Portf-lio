import './style.css';

export default function ButtonComponente({ text, onClick, width }) {
  const widthComponete = width ? width : '110px';
  return (
    <div className='body-button ' >
     <button style={{ width: widthComponete }} onClick={onClick}>{text}</button>
    </div >
  );
}