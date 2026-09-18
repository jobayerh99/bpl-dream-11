import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Player from "./Components/Players/Player";
import type { Iplayer } from "./types/playerType";

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const playersPromise = playersFetch();

  const [playersPromise] = useState(()=>playersFetch());

  const [coin, setCoin] = useState(5000)

  return (
    <>
      <Nav coin = {coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Player playersPromise={playersPromise} coin ={coin} setCoin ={setCoin}></Player>
      </Suspense>
    </>
  );
}

export default App;
