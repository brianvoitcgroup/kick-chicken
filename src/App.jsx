import "./App.css";
import ReactPlayer from 'react-player'

const App = () => {
 

  return (
    <>
      <h2>Video</h2>
      <ReactPlayer url='https://fb.watch/s1T4KsP_6X/' />

      <h2>Live Video</h2>
      <ReactPlayer url='https://www.facebook.com/deltaofficialgaming/videos/790943792741902/' />
    </>
  );
};

export default App;
