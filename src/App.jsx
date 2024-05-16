import "./App.css";
import ReactPlayer from 'react-player'
import { useRef, useState } from 'react';

const App = () => {
  let ref = useRef(null);
  let [playing, setPlaying] = useState(true);

  const handleClick = () => {
    ref.current.seekTo(999999999999999*1000000000)
    ref.current.seekTo(999999999999999*1000000000);
    setPlaying(true);
  }

  return (
    <>
      Playing {String(playing)}

      <h2>Live Video</h2>
      <ReactPlayer ref={ref} url='https://www.facebook.com/GiacLeHieu.HQ/videos/745964404223432/?__cft__[0]=AZW4kkd8CsHozSA2Rnga3LpIPOkLGfNTwNz7Y9A9MP_7NIJ6quiTm8m1K71sLdx_ClV0bZD-ozhaZroxRncjSrdScFseNvTSh9DdzJjsp_DgD1XRnY-Wef1IBFsUnNnem4C7AAL5ut-T0IqnluRNZJjt2cYYv6HSgNwGJKMoNU30OA'  muted playing={playing} />

      <button onClick={handleClick}>Refresh</button>
      <button onClick={() => setPlaying(true)}>Play</button>
      <button onClick={() => setPlaying(false)}>Pause</button>
    </>
  );
};

export default App;
