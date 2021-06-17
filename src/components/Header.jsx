import React, { useState } from 'react';
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
    navbarShow: {
        position: 'fixed',
        top: 10,
        right: 0,
        border: '1px solid black',
        borderRadius: '8px 0px 0px 8px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-evenly',
        padding: '.1rem',
        backgroundColor: 'black',
        maxHeight: '80px',
        animation: '$openNav .3s ease-in-out',
    },
    navbarHide: {
        position: 'fixed',
        top: 10,
        right: -300,
        border: '1px solid black',
        borderRadius: '8px 0px 0px 8px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-evenly',
        padding: '.1rem',
        backgroundColor: 'black',
        maxHeight: '80px',
        // transition: '.3s ease-in-out',
        animation: '$closeNav .3s ease-in-out',
    },
    navbarItem: {
        margin: '1rem',
        maxWidth: '60px',
        maxHeight: '100%'
    },
    toggleButton: {
        '&:hover': {
<<<<<<< HEAD
            transform: 'scale(1.05)',
            color: 'blue',
            transition: 'ease-in-out',
=======
            transform: 'scale(1.1)',
>>>>>>> basic-header
        },
        transition: '.5s cubic-bezier(.87,0,.27,1.55)',
        position: 'absolute',
        left: -15,
        top: '25px',
        backgroundColor: 'white',
        border: '3px solid black',
        borderRadius: '8px 0 0 8px',
        cursor: 'pointer',
        userSelect: 'none',
        color: 'red',
    },
    '@keyframes closeNav': {
        from: {right: 0,},
        to: {right: -300}
    },
    '@keyframes openNav': {
        from: {right: -300},
        to: {right: 0}
    }
});

// TODO: Abstract the Navigation out
const Header = (props) => {
    const [showNavbar, setShowNavbar] = useState(true);

    function toggleNavbar () {
        setShowNavbar(!showNavbar)
        console.log('showNavBar = ', showNavbar);
    };

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <img className={classes.logo} src={Logo1} alt='Headbyte Studios Logo'/>
                <div className={showNavbar ? classes.navbarShow : classes.navbarHide}>
                    <div 
                        className={classes.toggleButton} 
                        onClick={()=>toggleNavbar()}>
                        {showNavbar ? '>' : '<'}
                    </div>
                    <img 
                        className={classes.navbarItem} 
                        src={HB_Thumb} 
                        alt='Nav Link to HeadByte Home section'
                        onClick={()=>props.navigation(0)}
                    />
                    <img 
                        className={classes.navbarItem} 
                        src={DT_Thumb} 
                        alt='Nav Link to Dread Tides section'
                        onClick={()=>props.navigation(1)}
                    />
                    <div 
                        className={classes.navbarItem}>
                        Item
                    </div>
                    <div 
                        className={classes.navbarItem}>
                        Item
                    </div>
                </div>
        </div>
    );
};
export default Header;