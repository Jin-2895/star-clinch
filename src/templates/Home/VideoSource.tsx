import React from 'react'
import ReactPlayer from 'react-player';

type Props = {
  src: string
}

const VideoSource = (props: Props) => {
  return (
    <div className="video-player">
        <ReactPlayer
          className="player"
          url={props.src}
          controls={false}
          playing={true}
          width="100%"
          height="100%"
      />
      <style jsx>{`
        .player > video {
        width: 640px !important;
        height: 640px !important;
        object-fit: inherit;
        }
        .video-player {
          width: 640px;
          height: 640px;
          overflow: hidden;
        }
        .player-wrapper {
          position: relative;
          padding-top: 56.25%; /* 16:9 aspect ratio (divide 9 by 16 = 0.5625) */
        }
        .react-player {
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
       
  )
}

export default VideoSource