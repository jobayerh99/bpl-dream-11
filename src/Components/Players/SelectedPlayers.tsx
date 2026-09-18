import React, { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayers {
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayers) => {
  // console.log(selectedPlayers, "from selected players component");

  if(selectedPlayers.length === 0){
    return <h2 className="font-bold text-3xl text-red-500 text-center">No Selected Players</h2>
  };

  return (
    <div className="grid grid-cols-1 gap-7 mt-6">
      {selectedPlayers.map((player: Iplayer, ind:number) => {
        return (
          <SelectedPlayerCard
            key={ind}
            coin={coin}
            setCoin={setCoin}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
