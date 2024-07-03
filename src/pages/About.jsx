import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>À propos</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Bienvenue sur notre application de machine à sous éducative ! Notre objectif est de vous aider à découvrir et à apprendre des mots désuets et oubliés en français de manière ludique et addictive.
          </p>
          <p>
            Chaque fois que vous tirez le levier, vous découvrirez un nouveau mot avec sa définition. Nous espérons que vous apprécierez cette expérience et que vous apprendrez de nouveaux mots intéressants et utiles.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;