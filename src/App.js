import React, { useState } from "react";
import Waveform from "./waveform";

// const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

export default function App() {
  return (
    <div className="App">
      <Waveform
        url={
          "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
        }
      />
      <Waveform
        url={
          "https://candor-be.s3.amazonaws.com/candor/6508374ecd78a0a84ff74d5b/conversation/audios/1700137524281_recorded_audio.mp3"
        }
      />

      <br />
      <p>Wavesurfer.js with React.JS</p>
    </div>
  );
}
