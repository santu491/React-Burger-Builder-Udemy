import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'

class Contactdata extends Component {
    state = {
        // name: '',
        // email: '',
        // address: {
        //     street: '',
        //     postalCode: ''
        // },
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                validation: {
                    isRequired: true,
                    minLength: 3,
                    maxLenght: 10
                },
                isValid: false,
                isTouched:false,
                value: ''
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                },
                validation: {
                    isRequired: true,
                    minLength: 3,
                    maxLenght: 10
                },
                isValid: false,
                isTouched:false,
                value: ''
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street',
                },
                validation: {
                    isRequired: true,
                    minLength: 3,
                    maxLenght: 10
                },
                isValid: false,
                isTouched:false,
                value: ''
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zipCode',
                },
                validation: {
                    isRequired: true,
                    minLength: 3,
                    maxLenght: 10
                },
                isValid: false,
                isTouched:false,
                value: ''
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country Name',
                },
                validation: {
                    isRequired: true,
                    minLength: 3,
                    maxLenght: 10
                },
                isValid: false,
                isTouched:false,
                value: ''
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { value: 'fastest', displayName: "Fastest" },
                        { value: 'cheapest', displayName: "Cheapest" },
                    ],
                },
                validation: {
                    isRequired: true,
                    minLength: 3,
                    maxLenght: 10
                },
                isValid: true,
                //isTouched:true,
                value: "fastest"
            }
        },
        formIsValid:false,
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        let formData = {}
        for (let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value
        }

        this.setState({ loading: true })
        let data = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
            // customer: {
            //     name: "santosh",
            //     address: {
            //         state: "A.p",
            //         country: "India"
            //     },
            //     deliveryMethod: "fast"
            // }

        }

        axios.post('/orders.json', data).then((response) => {
            console.log("response", response)
            this.setState({ loading: false, })
            this.props.history.push('/')
        }).catch((e) => {
            console.log("error", e)
            this.setState({ loading: false })
        })
        // alert("continued")
        // alert(JSON.stringify(this.props.ingredients) )

    }

    changeInputhandler = (event, id) => {
        let updatedOredrForm = {
            ...this.state.orderForm
        }
        let updatedElemet = {
            ...updatedOredrForm[id]
        }
        updatedElemet.value = event.target.value
        updatedElemet.isTouched=true
        updatedElemet.isValid=this.checkValidation(updatedElemet.value,updatedElemet.validation)
        updatedOredrForm[id] = updatedElemet

        let formIsValid=true;
        for(let key in updatedOredrForm){
            formIsValid=updatedOredrForm[key].isValid && formIsValid 
        }

        this.setState({ orderForm: updatedOredrForm,formIsValid:formIsValid })

    }

    checkValidation = (value, rules) => {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid ;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid ;
        }
        return isValid
    }

    render() {
        let formElementArray = []
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        let form = <form onSubmit={this.orderHandler}>
            {/* <input className="Input" type="text" name="name" placeholder="Your Name" />
            <input className="Input" type="email" name="email" placeholder="Your email" />
            <input className="Input" type="text" name="street" placeholder="Your street" />
            <input className="Input" type="text" name="postal" placeholder="Your postal" /> */}
            {
                formElementArray.map((formElemet) =>

                    (<Input
                        key={formElemet.id}
                        elementType={formElemet.config.elementType}
                        elementConfig={formElemet.config.elementConfig}
                        value={formElemet.config.value}
                        inValid={!formElemet.config.isValid}
                        shouldValidate={formElemet.config.validation}
                        isTouched={formElemet.config.isTouched}
                        onChange={(event) => this.changeInputhandler(event, formElemet.id)}
                    />)
                )
            }
            {/* <Input inputtype="input" type="text" name="name" placeholder="Your Name" label="name" />
            <Input inputtype="input" type="email" name="email" placeholder="Your email" label="email" />
            <Input inputtype="input" type="text" name="street" placeholder="Your street" label="street" /> */}
            {/* <Input inputType="input" type="text" name="postal" placeholder="Your postal" label="postal" /> */}
            <Button btnType="Success"  disbled={!this.state.formIsValid}>ORDER</Button>
        </form>
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        ingredients:state.ingredients,
        totalPrice:state.totalPrice
    }
}

export default connect(mapStateToProps)(Contactdata)