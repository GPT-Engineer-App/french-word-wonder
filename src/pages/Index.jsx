import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { words } from "@/data/words"; // Assuming you have a words.js file with the words and definitions
import slotMachineAnimated from "@/public/images/slot-machine-animated.gif"; // Importing the animated slot machine GIF
import leverPullSound from "@/public/sounds/lever-pull.mp3"; // Importing the lever pull sound
import rewardSound from "@/public/sounds/reward.mp3"; // Importing the reward sound

const Index = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const pullLever = () => {
    const leverSound = new Audio(leverPullSound);
    leverSound.play();
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
      setIsSpinning(false);
    const rewardSoundEffect = new Audio(rewardSound);
      rewardSoundEffect.play();
    }, 2000); // Simulate the spinning time
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Machine à Sous Éducative</h1>
      <p className="text-lg">Apprenez des mots désuets et oubliés en français de manière ludique et addictive.</p>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Votre mot du jour</CardTitle>
        </CardHeader>
        <CardContent>
          {isSpinning ? (
            <img src={slotMachineAnimated} alt="Slot Machine Spinning" />
          ) : currentWord ? (
            <div>
              <h2 className="text-2xl font-semibold">{currentWord.word}</h2>
              <p>{currentWord.definition}</p>
            </div>
          ) : (
            <p>Tirez le levier pour découvrir un nouveau mot !</p>
          )}
        </CardContent>
      </Card>
      <Tooltip content="Tirez le levier pour découvrir un nouveau mot !">
        <Button onClick={pullLever} className="mt-4">
          Tirer le levier
        </Button>
      </Tooltip>
    </div>
  );
};

export default Index;