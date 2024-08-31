import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Card, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const Root = styled(Card)(({ theme }) => ({
  width: 'auto',
  margin: '10px',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  maxHeight: '200px',
  cursor: 'pointer',
}));

const Media = styled('video')(() => ({
  width: '100%',
  maxHeight: '200px',
  objectFit: 'cover',
  cursor: 'pointer',
  display: 'block',
  transition: 'transform 0.3s ease-in-out',
}));

const FullScreenMedia = styled('video')({
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});

function VideoPlayerCard({ src, poster }) {
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });
  const videoRef = useRef(null);
  const fullScreenVideoRef = useRef(null);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setVideoSize({
          width: videoRef.current.videoWidth,
          height: videoRef.current.videoHeight,
        });
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        videoElement.removeEventListener(
          'loadedmetadata',
          handleLoadedMetadata
        );
      };
    }
  }, [src]);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      try {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error('Play was interrupted:', error);
          });
        }
        setPlaying(true);
      } catch (error) {
        console.error('Error attempting to play:', error);
      }
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, []);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Root>
        <Media
          src={src}
          poster={poster}
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />
      </Root>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{
          style: {
            width: 'auto',
            height: 'auto',
          },
        }}
      >
        <DialogContent style={{ padding: 0 }}>
          <FullScreenMedia
            src={src}
            poster={poster}
            ref={fullScreenVideoRef}
            controls
            autoPlay
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default VideoPlayerCard;
