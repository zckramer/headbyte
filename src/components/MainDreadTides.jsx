import React from 'react';
import { createUseStyles } from 'react-jss';
import { Timeline } from 'react-twitter-widgets';

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

            <Timeline
                className='TwitterFeed'
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'DreadTides'
                }}
                options={{
                    height: '600',
                    width: '800'
                }}
            />
        </div>
    )
}
export default MainDreadTides;