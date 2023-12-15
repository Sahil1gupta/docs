import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
function App() {
  return (
    <div className=" relative w-full h-screen bg-zinc-800">
      <Background mainname="Docs" heading="Document"></Background>
      <Foreground></Foreground>
    </div>
  )
}

export default App