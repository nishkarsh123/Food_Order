import React from 'react';
import img from './meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onshow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={img} alt='A table full of meals' />
            </div>
        </React.Fragment>
    )
}

export default Header;