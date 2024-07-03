import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { words } from "@/data/words"; // Assuming you have a words.js file with the words and definitions
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Index = () => {
  const [currentWord, setCurrentWord] = useState(null);

  const pullLever = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
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
          {currentWord ? (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold">{currentWord.word}</h2>
              <p>{currentWord.definition}</p>
            </motion.div>
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