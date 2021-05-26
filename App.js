import * as React from 'react';
import Iframe from 'react-iframe'


export default function App() {
  return (
    <Iframe url="https://meet.jit.si/FellowshipAsSr"
        width="750px"
        height="750px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allow="camera; microphone"
        />
  );
}
