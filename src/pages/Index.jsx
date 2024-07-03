import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { words } from "@/data/words";
import { motion } from "framer-motion";

const Index = () => {
  const [currentWord, setCurrentWord] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const pullLever = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const newWord = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(newWord);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Machine à Sous pour Mots Aléatoires</h1>
      <p className="text-lg">Apprenez des mots désuets et oubliés en français.</p>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Votre mot du jour</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-4">
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: isSpinning ? 100 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {currentWord ? (
                <>
                  <h2 className="text-2xl font-semibold">{currentWord.word}</h2>
                  <p>{currentWord.definition}</p>
                </>
              ) : (
                <p>Appuyez ici pour découvrir un nouveau mot !</p>
              )}
            </motion.div>
          </div>
        </CardContent>
      </Card>
      <Tooltip content="Appuyez ici pour découvrir un nouveau mot !">
        <Button onClick={pullLever} className="mt-4">
          Appuyer ici
        </Button>
      </Tooltip>
    </div>
  );
};

export default Index;