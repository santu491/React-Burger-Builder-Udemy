import React from 'react';
import classes from './Input.css'

const Input = (props) => {
    let inputElement = null
    let inputElementClasses=["InputElement"]
    if(props.inValid && props.shouldValidate && props.isTouched){
        inputElementClasses.push("InValid")
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                className={inputElementClasses.join(' ')}
                onChange={props.onChange}
                />
            break;
        case 'textArea':
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                className={inputElementClasses.join(' ')} 
                onChange={props.onChange}
                />
            break;
        case 'select':
            inputElement = (<select
                // {...props.elementConfig}
                value={props.value}
                className={inputElementClasses.join(' ')}
                onChange={props.onChange}
                >
                {props.elementConfig.options.map((option) => 
                   ( <option key={option.value} value={option.value}>{option.displayName}</option>)
                )}
            </select>)
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.onChange}
                className={inputElementClasses.join(' ')} />

    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input