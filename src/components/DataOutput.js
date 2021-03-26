import React from 'react'
import ProgressBar from './ProgressBar'
import prettyMilliseconds from 'pretty-ms'

const DataOutput = (props) => {

   const { name, artistName, duration, popularity, audioFeatures } = props
    
   const {danceability, energy, key, mode, speechiness, acousticness, 
    instrumentalness, liveness, valence, tempo, } = audioFeatures

    const container = {
        padding: '80px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }

    const itemContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    }
    const title = {
        width: '200px',
        textAlign: 'left'
    }

    return (
        <div style={container}>
            <h2>{name}</h2>
            <h3>by {artistName}</h3>
            <div>Duration: {prettyMilliseconds(duration, {secondsDecimalDigits: 0})}</div>
            <div>Key: {key} Mode: {mode} Tempo: {tempo}</div>
            <div style={itemContainer}>
                <div style={title}>Popularity</div>
                <ProgressBar value={popularity}/>
             </div>
            <div style={itemContainer}>
                <div style={title}>Danceability</div>
                <ProgressBar value={danceability*100}/>
             </div>
            
            <div style={itemContainer}>
                <div style={title}>Energy</div>
                <ProgressBar value={energy*100}/>
             </div>
            <div style={itemContainer}>
                <div style={title}>Speechiness</div>
                <ProgressBar value={speechiness*100}/>
             </div>
            <div style={itemContainer}>
                <div style={title}>Acousticness</div>
                <ProgressBar value={acousticness*100}/>
             </div>
            <div style={itemContainer}>
                <div style={title}>Instrumentalness</div>
                <ProgressBar value={instrumentalness*100}/>
             </div>
            <div style={itemContainer}>
                <div style={title}>Liveness</div>
                <ProgressBar value={liveness*100}/>
             </div>
            <div style={itemContainer}>
                <div style={title}>Valence</div>
                <ProgressBar value={valence*100}/>
             </div>
        </div>
    )
}

export default DataOutput