import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    header: {
        position: 'absolute',
        width: '100vw',
        height: '200px'
    },
    navbar: {
        position: 'absolute',
        right: 0,
        top: 15,
        border: '1px solid black',
        borderRadius: '8px 0px 0px 8px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-evenly',
        padding: '.25rem'
    },
    navbarItem: {
        margin: '1rem'
    }

})

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className="Header__Logo">Logo</div>
            <div className={classes.navbar}>
                <div className={classes.navbarItem}>Item</div>
                <div className={classes.navbarItem}>Item</div>
                <div className={classes.navbarItem}>Item</div>
                <div className={classes.navbarItem}>Item</div>
            </div>
        </div>
    )
}
export default Header;