import React from "react";
import prevButton from "../../image/Stop_and_play_fill-1.svg";
import playButton from "../../image/Play_fill.svg";
import nextButton from "../../image/Stop_and_play_fill.svg";

const PlayerButtons = () => {
  return (
    <div className="flex justify-center gap-8">
      <button>
        <img src={prevButton} alt="Previous music button" />
      </button>
      <button className="bg-[#C93B76] h-12 w-12 rounded-full flex justify-center items-center">
        <img src={playButton} alt="Play/Stop music button" />
      </button>
      <button>
        <img src={nextButton} alt="Next music button" />
      </button>
    </div>
  );
};

export default PlayerButtons;
