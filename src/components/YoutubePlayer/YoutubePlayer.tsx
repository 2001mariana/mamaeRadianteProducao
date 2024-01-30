import React from 'react';
import YouTube from 'react-youtube';

interface YoutubePlayerProps {
  iniciarTemporizador: () => void
}

const YouTubePlayer = ({iniciarTemporizador }: YoutubePlayerProps) => {

  return (
    <YouTube videoId="7FUALx4l6No" onPlay={iniciarTemporizador} />
  );
};

export default YouTubePlayer;