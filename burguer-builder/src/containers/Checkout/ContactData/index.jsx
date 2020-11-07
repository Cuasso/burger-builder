import React, { Component } from 'react'
import Button from '../../../components/UI/Button'
import Spinner from '../../../components/UI/Spinner'
import axios from '../../../axios-orders'

import classes from './style.module.css'

class ContactData extends Component {
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
        console.log('contact data')
        console.log(this.props.ingredients)
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'lafken',
                addres: {
                    street: 'Echeverria 4661',
                    zipCode: '1757',
                    country: 'Argentina'
                },
                email: 'lafken@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input type='text' className={classes.Input} name='text' placeholder='Your Name' />
                <input type='text' className={classes.Input} name='email' placeholder='Your Email' />
                <input type='text' className={classes.Input} name='street' placeholder='Street' />
                <input type='text' className={classes.Input} name='postal' placeholder='Postal Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.state.loading) { form = <Spinner /> }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
export default ContactData