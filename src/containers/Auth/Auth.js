import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../.././components/UI/Button/Button'
import className from './Auth.css'
import * as actionCreator from '../../store/actions/index'
import {connect} from 'react-redux'

class Auth extends Component {

    state = {
        authForm: {
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
        },
        formIsValid:false
    }

    checkValidation=(value,validation)=>{
       let isValid=true
        if(validation.isRequired){
            isValid= value.trim() !== "" && isValid
        }
        if(validation.minLength){
            isValid=value.length>=validation.minLength && isValid
        }

        return isValid

    }

    changeInputHandler=(e,id)=>{
    let updatedForm={...this.state.authForm}
    let updatedFormElement={...updatedForm[id]}
    updatedFormElement.value=e.target.value
    updatedFormElement.isTouched=true
    updatedFormElement.isValid=this.checkValidation(updatedFormElement.value,updatedFormElement.validation)
    updatedForm[id]=updatedFormElement
    let formIsValid=true;
    for(let key in updatedForm){
        formIsValid=updatedForm[key].isValid && formIsValid
    }
    this.setState({authForm:updatedForm,formIsValid:formIsValid})


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

    submitForm=(event)=>{
        event.preventDefault()
        this.props.authentication(this.state.authForm.email.value,this.state.authForm.password.value)
    }
    render() {

        let formarrayElement = []
        for (let key in this.state.authForm) {
            formarrayElement.push({
                id: key,
                config: this.state.authForm[key]
            })
        }



        return (
            <div className="Auth">
                <form onSubmit={this.submitForm}>
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
                        onChange={(event)=>this.changeInputHandler(event,formElement.id)}
                        />
                    )

                })
                }
                <Button btnType="Success" disbled={!this.state.formIsValid}>Login</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        authentication:(email,password)=>dispatch(actionCreator.authentication(email,password))
    }

}

export default connect(null,mapDispatchToProps)(Auth)