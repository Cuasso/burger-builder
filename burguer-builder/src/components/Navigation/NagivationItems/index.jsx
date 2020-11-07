import React from 'react'
import NavigationItem from './NavigationItem'
import classes from './style.module.css'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact >Burger Builder</NavigationItem>
        <NavigationItem link='/orders'> Orders</NavigationItem>
    </ul>
)

export default NavigationItems