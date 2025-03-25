import React, { useRef } from 'react'
import Video from '../images/videosong.mp4'

const Videoplay = () => {
    const videoref = useRef(null)

    const playvideo = () => {
        videoref.current.play()
    }
    const pausevideo = () => {
        videoref.current.pause()
    }

    return (
        <>
            <button onClick={playvideo} className='btn btn-primary'>Play</button>
            <button onClick={pausevideo} className='btn btn-success'>Pause</button>
            <hr />
            <video ref={videoref}>
                <source src={Video} width={500} />
            </video>
        </>
    )
}

export default Videoplay
