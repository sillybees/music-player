import React from "react";
import playerSongPic from "../../image/cover-1.png";
import MusicTitle from "../MusicTitle/MusicTitle";
import PlayerButtons from "../PlayerButtons/PlayerButtons";

const Card = () => {
  return (
    <div className="bg-[#121826a6] w-96 rounded-3xl p-6">
      <div className="object-contain h-full">
        <img src={playerSongPic} alt="" className="w-full h-full rounded-3xl" />
      </div>
      <div className="py-4">
        <MusicTitle />
      </div>
      <div>
        <PlayerButtons />
      </div>
    </div>
  );
};

export default Card;
