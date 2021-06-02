import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    body: {
        height: '800rem'
    }
})

const MainHeadbyte = () => {
    const classes = useStyles();

    return (
        <div className={classes.body}>

        </div>
    )
}
export default MainHeadbyte;