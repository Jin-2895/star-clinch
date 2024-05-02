import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

type Props = {
  src?: string | undefined;
};

const VideoSource = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && props) {
      const playerOptions = {
        sources: [
          {
            src: props.src,
            type: "application/x-mpegURL",
          },
        ],
      };

      const player = videojs(videoRef.current, playerOptions);

      // Add play/pause button
      const playButton = document.createElement("button");
      playButton.className = "vjs-play-control vjs-control";
      playButton.innerHTML = `
        <span class="vjs-control-text">Play</span>
        <span aria-hidden="true" class="vjs-icon-placeholder"></span>
        <span class="vjs-icon-cog vjs-icon-placeholder" aria-hidden="true"></span>
        <span class="vjs-icon-collective-play-button"></span>
      `;

      const playerView = document.getElementById("vjs_video_3")
      playerView.style.width = "534px"
      playerView.style.height = "100%"
      playerView.style.borderRadius = "0 250px 0 250px"

      const videoPlayer = document.getElementById("vjs_video_3_html5_api")
      videoPlayer.style.borderRadius = "0 220px 0 220px"

      // Add style to player

      playButton.onclick = function () {
        if (player.paused()) {
          player.play();
        } else {
          player.pause();
        }
      };

      player.addChild(playButton);
    }
  }, [props]);

  if (props?.src) {
    return <video controls ref={videoRef} className="video-js rounded-tr-[35%] rounded-bl-[35%] h-full" />;
  }
  return null
};

export { VideoSource };
