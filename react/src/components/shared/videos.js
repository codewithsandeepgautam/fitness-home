import React, { useState } from 'react';
import { ImageIcons } from '../imageComponent';
import ReactPlayer from 'react-player'
import { FaPlay } from "react-icons/fa";
function Videos() {
    const [playingIndex, setPlayingIndex] = useState(null);
    const iframeStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    };
    const handlePlay = (index) => {
        setPlayingIndex(index);
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryItems?.map((item, index) => (
                    <div className="itemsstyle relative pb-[56.25%] pt-8 h-0 overflow-hidden w-full" key={index}>
                        <ReactPlayer
                            url={item.item}
                            loop={false}
                            width="100%"
                            height="100%"
                            playbackRate={1}
                            style={iframeStyle}
                            playing={playingIndex === index}
                            onPlay={() => handlePlay(index)}
                            controls={true}
                            light={item.image}
                            playIcon={<FaPlay onClick={() => handlePlay(index)} className="youtube-icon h-10 w-10 text-[#fff]" />}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
const galleryItems = [
    {
        item: ImageIcons.video,
        image: ImageIcons.thumbnail1
    },
    {
        item: ImageIcons.video2,
        image: ImageIcons.thumbnail2
    },
    {
        item: ImageIcons.gymvideo2,
        image: ImageIcons.thumbnail4
    },
];

export default Videos;
