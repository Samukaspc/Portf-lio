import './style.css';
export default function InputComponente({ placeholder, type, name}) {
    console.log('name', name)
    return (
        <>
        <p className="input-p" >{name}</p>
        <input className='input-componente'  type={type} placeholder={placeholder} />
        </>
    )
}