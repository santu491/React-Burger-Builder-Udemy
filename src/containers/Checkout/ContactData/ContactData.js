import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class Contactdata extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        let data = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: "santosh",
                address: {
                    state: "A.p",
                    country: "India"
                },
                deliveryMethod: "fast"
            }

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

    render() {
        let form = <form>
            <input className="Input" type="text" name="name" placeholder="Your Name" />
            <input className="Input" type="email" name="email" placeholder="Your email" />
            <input className="Input" type="text" name="street" placeholder="Your street" />
            <input className="Input" type="text" name="postal" placeholder="Your postal" />
            <Button btnType="Success" onClick={this.orderHandler} >ORDER</Button>
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

export default Contactdata