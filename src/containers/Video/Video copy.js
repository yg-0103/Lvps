import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

/* -------------------------------------------------------------------------- */

const opts = {
  width: '100%',
  height: '680px',
  playerVars: {
    autoplay: 1,
    modestbranding: 1,
    showinfo: 0,
    controls: 0,
    fs: 0,
    cc_load_policy: 0,
    iv_load_policy: 3,
    autohide: 0,
    loop: 1
  }
};

/* -------------------------------------------------------------------------- */
const StyledVideo = styled(YouTube)``;

const Video = ({ videoId, options = {}, ...restProps }) => {
  options = { ...opts, ...options };

  const youtubeRef = React.useRef(null);

  const handleReady = e => {
    e.target.mute();
  };

  const handleEnd = e => {
    e.target.playVideo();
  };

  React.useEffect(() => {
    const player = youtubeRef.current.getInternalPlayer();
    const handleKeyUp = e => {
      const code = e.keyCode;

      // when a user enter the ESC
      code === 27 && player.pauseVideo();

      // When a user enter Shift or Enter
      (code === 32 || code === 13) && player.playVideo();
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <StyledVideo
      ref={youtubeRef}
      opts={options}
      videoId={videoId}
      onReady={handleReady}
      onEnd={handleEnd}
      {...restProps}
    />
  );
};

export default Video;