import React from 'react';
import { createUseStyles } from 'react-jss';
import TextPanel from './TextPanel';

const useStyles = createUseStyles({
    body: {
        position: 'absolute',
        top: '120px',
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
                title='Dread Tides'
                p1='Coming Soon from HeadByte Studios'
                p2='A real-time strategy games with tower-defence elements. '
                p3={<a  href='https://store.steampowered.com/app/1256510/Dreadtides/' 
                        style={{all: 'inherit', cursor: 'pointer'}}>
                            Available now as early-access on Steam!
                    </a>}
                p4='Available'
            />
        </div>
    )
};
export default MainHeadbyte;