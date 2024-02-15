import React from 'react';
import YouTube from 'react-youtube';

interface YoutubePlayerProps {
  iniciarTemporizador: () => void
}

const YouTubePlayer = ({iniciarTemporizador }: YoutubePlayerProps) => {

  return (
    <YouTube videoId="paH3st7zKpg" onPlay={iniciarTemporizador} />
  );
};

export default YouTubePlayer;