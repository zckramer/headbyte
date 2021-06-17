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
    const twitterFeed = '<a class="twitter-timeline" data-width="1200" data-height="900" href="https://twitter.com/DreadTides?ref_src=twsrc%5Etfw">Tweets by DreadTides</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
    return (
        <div className={classes.body}>
            <h1>Dread Tides</h1>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'DreadTides'
                }}
                options={{
                    height: '600',
                    width: '800'
                }}
            />
            {/* <div className='TwitterFeed' dangerouslySetInnerHTML={{__html: twitterFeed}}></div> */}
        </div>
    )
}
export default MainDreadTides;