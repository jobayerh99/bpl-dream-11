import React, { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>
}

const Players = ({ playersPromise, coin , setCoin }: PlayersProps) => {

  const players = use(playersPromise);

  const [buttonType, setButtonType] = useState<"available" | "selected">("available");

  const handleUpdateBtnType = (type: "available" | "selected") =>{
    setButtonType(type);
  }

  // selected players logic section

  const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([])

  return (
    <div className="container mx-auto">

      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>

        <div className="flex">
          <button onClick={()=>handleUpdateBtnType("available")}
          className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>

          <button onClick={()=>handleUpdateBtnType("selected")}
          className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
        </div>
      </div>

      {buttonType === "available" ? (
        <AvailablePlayers 
        players={players} 
        coin = {coin} 
        setCoin = {setCoin} 
        selectedPlayers={selectedPlayers}  
        setSelectedPlayers = {setSelectedPlayers}/>
        ) : (
        <SelectedPlayers 
        selectedPlayers = {selectedPlayers} 
        setSelectedPlayers = {setSelectedPlayers}
        coin = {coin} 
        setCoin = {setCoin}
        />)}
    </div>
  );
};

export default Players;
