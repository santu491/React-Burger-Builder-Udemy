import React, { Component, useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux'
import WithErrorhandler from '../../../hoc/WithErrorHandler/WithErrorHandler'
import { purchaseBurger } from '../../../store/actions/order'

const Contactdata = (props) => {
    const [orderForm, setOrderForm] = useState({
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
            isTouched: false,
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
            isTouched: false,
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
            isTouched: false,
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
            isTouched: false,
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
            isTouched: false,
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
    })

    const [loading, setLoading] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

    const orderHandler = (event) => {
        event.preventDefault()
        let formData = {}
        for (let key in orderForm) {
            formData[key] = orderForm[key].value
        }
        setLoading(true)
        // this.setState({ loading: true })
        let data = {
            ingredients: props.ingredients,
            price: props.totalPrice,
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

        props.purchaseBurger(data, props.history)

        // axios.post('/orders.json', data).then((response) => {
        //     console.log("response", response)
        //     this.setState({ loading: false, })
        //     this.props.history.push('/')
        // }).catch((e) => {
        //     console.log("error", e)
        //     this.setState({ loading: false })
        // })
        // alert("continued")
        // alert(JSON.stringify(this.props.ingredients) )

    }

    const changeInputhandler = (event, id) => {
        let updatedOredrForm = {
            ...orderForm
        }
        let updatedElemet = {
            ...updatedOredrForm[id]
        }
        updatedElemet.value = event.target.value
        updatedElemet.isTouched = true
        updatedElemet.isValid = checkValidation(updatedElemet.value, updatedElemet.validation)
        updatedOredrForm[id] = updatedElemet

        let formIsValid = true;
        for (let key in updatedOredrForm) {
            formIsValid = updatedOredrForm[key].isValid && formIsValid
        }

        // this.setState({ orderForm: updatedOredrForm,formIsValid:formIsValid })
        setOrderForm(updatedOredrForm)
        setFormIsValid(formIsValid)

    }

    const checkValidation = (value, rules) => {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid
    }


    let formElementArray = []
    for (let key in orderForm) {
        formElementArray.push({
            id: key,
            config: orderForm[key]
        })
    }


    let form = <form onSubmit={orderHandler}>
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
                    onChange={(event) => changeInputhandler(event, formElemet.id)}
                />)
            )
        }
        {/* <Input inputtype="input" type="text" name="name" placeholder="Your Name" label="name" />
            <Input inputtype="input" type="email" name="email" placeholder="Your email" label="email" />
            <Input inputtype="input" type="text" name="street" placeholder="Your street" label="street" /> */}
        {/* <Input inputType="input" type="text" name="postal" placeholder="Your postal" label="postal" /> */}
        <Button btnType="Success" disbled={!formIsValid}>ORDER</Button>
    </form>
    if (props.loading) {
        form = <Spinner />
    }
    return (
        <div className="ContactData">
            <h4>Enter your contact Data</h4>
            {form}
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseBurger: (data, history) => dispatch(purchaseBurger(data, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorhandler(Contactdata, axios))