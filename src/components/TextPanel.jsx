import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    topPanel: {
        position: 'absolute',
        backgroundColor: '#555555',
        width: '600px',
        maxHeight: '100%',
        minHeight: '200px',
        border: '5px solid #262626',
        borderRadius: '5px',
        left: '25%',
    },
    leftPanel: {
        backgroundColor: '#262626',
        position: 'absolute',
        top: '40px',
        left: '15px',
        width: '70%',
        maxHeight: '100%',
        borderRadius: '3px 0 0 3px',
        padding: '8px',
        minHeight: '130px',
    },
    leftPanelInner: {
        position: 'relative',
        backgroundColor: '#1c1c1c',
        width: '100%',
    },
    title: {
        color: 'yellow',
        minHeight: '40px',
        fontWeight: 'bolder',
    },
    panel1: {
        color: 'yellow',
    },
    panel2: {
        color: 'orange',
    },
    panel3: {
        color: 'white',
    },
    link: {
        '&:hover': {
            color: 'lightblue',
            transform: 'scale(1.02)',
            transition: 'all .2s ease-in'
        },
        color: 'white',
        transition: 'all .6s ease-out'
    },
    rightPanel: {
        backgroundColor: '#262626',
        position: 'absolute',
        top: '40px',
        right: '15px',
        width: '18%',
        borderRadius: '0 3px 3px 0',
        padding: '8px',
        minHeight: '130px',
    },
    panel4: {
        position: 'relative',
        color: 'white',
        right: 0
    },
    purchaseButton: {
        backgroundImage: 'linear-gradient(#47613f, #2f4128)',
        color: 'yellow',
        border: '2px solid black',
        borderRadius: '3px',
        padding: '1rem'
    }
})

const TextPanel = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.topPanel} >
            <p className={classes.title} >{props.title}</p>
            <div className={classes.leftPanel} >
                <p className={classes.panel1}>{props.p1}</p>
                <div className={classes.leftPanelInner}>
                    <p className={classes.panel2}>{props.p2}</p>
                    <p className={classes.link}>{props.p3}</p>
                </div>
            </div>
            <div className={classes.rightPanel} >
            </div>
            <div className={classes.rightPanel}>
                <p className={classes.panel4}>
                    {props.p4}
                </p>
                <div className={classes.purchaseButton}>
                    Purchase
                </div>

            </div>
        </div>
    )
}
export default TextPanel;