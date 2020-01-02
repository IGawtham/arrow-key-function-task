import React from 'react'
const Input = ({name,value,label,error,onChange,type}) => {
    return (
<div className="form-group">
    <label htmlFor={name} id={name}>{label}</label>
        <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
</div>

);
}
 
export default Input;