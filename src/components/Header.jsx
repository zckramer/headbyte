import React from 'react';
import { createUseStyles } from 'react-jss';
import Logo1 from './images/Head byte Finale-01.png';
import HB_Thumb from './images/Head byte Finale-03.png';
import DT_Thumb from './images/dreadlogoonly2.png';

const useStyles = createUseStyles({
    header: {
        position: 'absolute',
        width: '100vw',
        height: '120px',
        borderBottom: '1px solid black',
        backgroundColor: 'gray',
        textAlign: 'center'
    },
    logo: {
        position: 'absolute',
        textAlign: 'center',
        top: 10,
        left: 10,
        height: '100px',
        width: '100px',
        borderRadius: '8px',
        backgroundColor: '#99aaff'
    },
    navbar: {
        position: 'fixed',
        right: 0,
        top: 10,
        border: '1px solid black',
        borderRadius: '8px 0px 0px 8px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-evenly',
        padding: '.1rem',
        backgroundColor: 'black',
        maxHeight: '80px'
    },
    navbarItem: {
        margin: '1rem',
        maxWidth: '60px',
        maxHeight: '100%'
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={Logo1} alt='Headbyte Studios Logo'/>
            <h1>HeadByte Studios</h1>
            <div className={classes.navbar}>
                <img className={classes.navbarItem} src={DT_Thumb} alt='Nav Link to Dread Tides section'/>
                <img className={classes.navbarItem} src={HB_Thumb} alt='Nav Link to HeadByte Home section'/>
                <div className={classes.navbarItem}>Item</div>
                <div className={classes.navbarItem}>Item</div>
            </div>
        </div>
    )
}
export default Header;