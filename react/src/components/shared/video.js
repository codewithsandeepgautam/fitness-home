import React from 'react';
import ImageIcons from '../imageComponent/ImageIcons';

function VideoPlayer() {
    return (
        <>
            <video className='rounded-[6px]' width="100%" height="100%" controls autoPlay muted>
                <source src={ImageIcons.video} type="video/mp4" />
                <source src={ImageIcons.video} type="video/ogg" />
            </video>
        </>
    );
}

export default VideoPlayer;
