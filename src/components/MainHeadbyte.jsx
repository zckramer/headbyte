import React from 'react';
import { createUseStyles } from 'react-jss';
import TextPanel from './TextPanel';

const useStyles = createUseStyles({
    body: {
        position: 'absolute',
        top: '120px',
        // backgroundColor: 'black',
        // color: 'white',
        width: '100%',
        height: '100%',
        textAlign: 'center'
    }
});

const MainHeadbyte = () => {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <h1>HeadByte Studios</h1>
            <TextPanel
                title='Coming soon from HeadByte:'
                p1='Dread Tides'
                p2='A real-time strategy games with tower-defence elements. '
                p3={<a href='https://store.steampowered.com/app/1256510/Dreadtides/'>Available now as early-access on Steam!</a>}
            />
        </div>
    )
};
export default MainHeadbyte;