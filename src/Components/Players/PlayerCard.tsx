import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import { FaUser, FaStar, FaGlobe, FaTag } from "react-icons/fa";
import { toast } from "react-toastify";

interface IPlayerCardProps {
  player : Iplayer;
  coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerCardProps) => {

  const [isSelected, setIsSelected] = useState(false)

  const handleSelectPlayer = () => {
    setIsSelected(true)

    const newCoinPrice = coin - player.price

    if (newCoinPrice >= 0){
      setCoin(newCoinPrice)
      toast.success(`${player.playerName} is pursached successfully`)
    }else{
      toast.error("Coin is not enough to purchase")
    }

    // selected players logic
    setSelectedPlayers([...selectedPlayers, player])
    
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Player Image */}
      <div className="relative overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-content">
            {player.playerType}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body gap-4 p-5">

        {/* Player Name */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaUser size={15} />
          </div>

          <div>
            <h2 className="text-xl font-bold leading-tight">
              {player.playerName}
            </h2>
            <p className="text-sm text-base-content/60">Professional Player</p>
          </div>
        </div>

        {/* Origin */}
        <div className="flex items-center justify-between rounded-xl bg-base-200 p-3">
          <div className="flex items-center gap-2">
            <FaGlobe className="text-primary" />
            <span className="text-sm font-medium">Origin</span>
          </div>

          <span className="font-semibold">{player.origin}</span>
        </div>

        {/* Rating */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold">Rating</h3>

            <div className="flex items-center gap-1 text-warning">
              <FaStar />
              <span className="font-bold">4.8</span>
            </div>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-base-300">
            <div className="h-full w-[85%] rounded-full bg-warning"></div>
          </div>
        </div>

        {/* Playing Style */}
        <div className="grid grid-cols-2 gap-3">
          
          <div className="rounded-xl border border-base-300 p-3">
            <p className="mb-1 text-xs text-base-content/60">
              Batting Style
            </p>

            <p className="font-semibold">
              {player.battingStyle}
            </p>
          </div>

          <div className="rounded-xl border border-base-300 p-3">
            <p className="mb-1 text-xs text-base-content/60">
              Bowling Style
            </p>

            <p className="font-semibold">
              {player.bowlingStyle}
            </p>
          </div>

        </div>

        <div className="divider my-0"></div>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">
          
          <div>
            <p className="text-xs text-base-content/60">Player Price</p>

            <div className="flex items-center gap-1">
              <FaTag className="text-primary" />
              <h2 className="text-2xl font-extrabold">
                ${player.price}
              </h2>
            </div>
          </div>

          <button onClick={()=> handleSelectPlayer()}
          className="btn btn-primary rounded-xl px-5 shadow-sm transition-all hover:scale-105"
          // disabled={isSelected === true ? true : false}
          // disabled={isSelected ? true : false}
          disabled = {isSelected}
          >
            {isSelected=== true ? "Selected" :"Choose Player" }
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;