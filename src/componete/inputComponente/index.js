import './style.css';
import React from 'react';

export default function InputComponente({ placeholder, type, name, onChange }) {
    return (
        <>
            <p className="input-p">{name}</p>
            <input
                required
                className='input-componente'
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}
