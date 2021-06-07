import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    body: {
        position: 'absolute',
        top: '120px',
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        height: '100%',
        textAlign: 'center'
    }
})

const MainDreadTides = () => {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <h1>Dread Tides</h1>
        </div>
    )
}
export default MainDreadTides;