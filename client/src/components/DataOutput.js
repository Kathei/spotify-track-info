import React from 'react'
import ProgressBar from './ProgressBar'
import prettyMilliseconds from 'pretty-ms'

const DataOutput = (props) => {

   const { name, artistName, duration, popularity, audioFeatures } = props
    
   const { danceability, energy, key, mode, speechiness, acousticness, 
    instrumentalness, liveness, valence, tempo } = audioFeatures

    const container = {
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
    const dataContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20
    }
    const data = {
        padding: 20,
        fontSize: 18,
        fontWeight: '600',
        borderRight: '1px solid #fff'
    }
    const firstData = {
        borderLeft: '1px solid #fff',
        
    }
    const title = {
        width: '200px',
        textAlign: 'left'
    }

    const getKey = key => {
        switch (key) {
            case 0:
                return 'C'
            case 1:
                return 'C♯/D♭'
            case 2: 
                return 'D'
            case 3: 
                return 'D♯/E♭'
            case 4:
                return 'E'
            case 5: 
                return 'F'
            case 6:
                return 'F♯/G♭'
            case 7: 
                return 'G'
            case 8: 
                return 'G♯/A♭'
            case 9:
                return 'A'
            case 10: 
                return 'A♯/B♭'
            case 11: 
                return 'B'
            default: 
                return 'C'
        }
    }
    const getMode = mode => {
        if (mode === 0) {
            return 'minor'
        }
        return 'major'
    }

    return (
        <div style={container}>
            <h2>{name}</h2>
            <h3>by {artistName}</h3>
            <div style={dataContainer}>
                <div style={{...firstData, ...data}}>{prettyMilliseconds(duration, {secondsDecimalDigits: 0})}</div>
            <div style={data}>{getKey(key)} {getMode(mode)}</div> <div style={data}>{Math.round(tempo)} BPM</div></div>
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