import React, { Component, useState } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../.././components/UI/Button/Button'
import className from './Auth.css'
import * as actionCreator from '../../store/actions/index'
import { connect } from 'react-redux'

const Auth = (props) => {

    const [authForm, setAuthForm] = useState({
        email: {
            elementType: "input",
            elementConfig: {
                type: 'email',
                placeholder: 'Enter Email ',
            },
            validation: {
                isRequired: true,
                minLength: 3,
                maxLenght: 10
            },
            isValid: false,
            isTouched: false,
            value: ''
        },
        password: {
            elemntType: "input",
            elementConfig: {
                type: "password",
                placeholder: "Enter Password"
            },
            validation: {
                isRequired: true,
                minLength: 3,
                maxLenght: 6
            },
            isValid: false,
            isTouched: false,
            value: ''
        }
    })

    const [formIsValid, setFormIsValid] = useState(false)
   const checkValidation = (value, validation) => {
        let isValid = true
        if (validation.isRequired) {
            isValid = value.trim() !== "" && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid

    }

   const changeInputHandler = (e, id) => {
        let updatedForm = { ...authForm }
        let updatedFormElement = { ...updatedForm[id] }
        updatedFormElement.value = e.target.value
        updatedFormElement.isTouched = true
        updatedFormElement.isValid = checkValidation(updatedFormElement.value, updatedFormElement.validation)
        updatedForm[id] = updatedFormElement
        let formIsValid = true;
        for (let key in updatedForm) {
            formIsValid = updatedForm[key].isValid && formIsValid
        }
        setAuthForm(updatedForm)
        setFormIsValid(formIsValid)


    }

    // checkValidation = (value, rules) => {
    //     let isValid = true
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid ;
    //     }
    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid ;
    //     }
    //     return isValid
    // }

    // changeInputhandler = (event, id) => {
    //     let updatedOredrForm = {
    //         ...this.state.orderForm
    //     }
    //     let updatedElemet = {
    //         ...updatedOredrForm[id]
    //     }
    //     updatedElemet.value = event.target.value
    //     updatedElemet.isTouched=true
    //     updatedElemet.isValid=this.checkValidation(updatedElemet.value,updatedElemet.validation)
    //     updatedOredrForm[id] = updatedElemet

    //     let formIsValid=true;
    //     for(let key in updatedOredrForm){
    //         formIsValid=updatedOredrForm[key].isValid && formIsValid 
    //     }

    //     this.setState({ orderForm: updatedOredrForm,formIsValid:formIsValid })

    // }

    const submitForm = (event) => {
        event.preventDefault()
        props.authentication(authForm.email.value, authForm.password.value)
    }


        let formarrayElement = []
        for (let key in authForm) {
            formarrayElement.push({
                id: key,
                config: authForm[key]
            })
        }



        return (
            <div className="Auth">
                <form onSubmit={submitForm}>
                    {formarrayElement.map((formElement) => {
                        return (
                            <Input
                                key={formElement.key}
                                value={formElement.config.value}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                inValid={!formElement.config.isValid}
                                isTouched={formElement.config.isTouched}
                                shouldValidate={formElement.config.validation}
                                onChange={(event) => changeInputHandler(event, formElement.id)}
                            />
                        )

                    })
                    }
                    <Button btnType="Success" disbled={!formIsValid}>Login</Button>
                </form>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        authentication: (email, password) => dispatch(actionCreator.authentication(email, password))
    }

}

export default connect(null, mapDispatchToProps)(Auth)