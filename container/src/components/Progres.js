import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import {LinearProgress} from '@material-ui/core';


const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default ()=> {
    const classes = useStyles();
    
    return  <div className={classes.bar}>
       <LinearProgress/>
        </div>
    
}