import React from 'react'
import './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {

    const inputType = props.type || 'text'
    const cls = ['input']
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push("invalid")
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange}/>
            {isInvalid ? <span>{props.errorMessage || "Put the valid value"}</span> : null}
        </div>
    )
}

export default Input