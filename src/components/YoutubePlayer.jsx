import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId, isPlaying, onPlay }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current?.playVideo();
    } else {
      playerRef.current?.pauseVideo();
    }
  }, [isPlaying]);

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.pauseVideo();
  };

  const onClick = () => {
    onPlay();
  };

  return (
    <div onClick={onClick}>
      <YouTube
        videoId={videoId}
        opts={{
          height: '200px',
          width: '100%',
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1, // Hide YouTube logo
            loop: 0,
            fs: 1,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 1,
          },
        }}
        onReady={onReady}
      />
    </div>
  );
};

export default YoutubePlayer;
