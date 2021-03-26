import React from 'react'
import { LinearProgress } from '@material-ui/core';
import {  withStyles } from '@material-ui/core/styles'

const ProgressBar = props => {

    const {value} = props

    const CustomLinearProgress = withStyles((theme) => ({
        root: {
          height: 20,
          width: 300
        },
        colorPrimary: {
          backgroundColor: '#000',
        },
        bar: {
          backgroundColor: '#fff',
        },
      }))(LinearProgress);

      const progressBox = {
        padding: '0',
        border: '2px solid #fff'
      }

    return (
    <div style={progressBox}>
        <CustomLinearProgress variant='determinate' value={value}/>
    </div>
    )
}

export default ProgressBar