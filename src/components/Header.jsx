import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo1 from './images/Head byte Finale-01.png';

const useStyles = createUseStyles({
    header: {
        position: 'absolute',
        width: '100vw',
        height: '125px',
        borderBottom: '1px solid black',
        backgroundColor: 'gray'
    },
    logo: {
        position: 'absolute',
        textAlign: 'center',
        top: 5,
        left: 5,
        // margin: '1rem',
        // padding: '.75rem',
        height: '100px',
        width: '100px',
        border: '1px solid black',
        borderRadius: '8px'
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
        margin: '1rem',
    }

})

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={Logo1} alt='Headbyte Studios Logo'/>
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