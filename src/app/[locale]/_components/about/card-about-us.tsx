import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";

interface CardAboutProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: string;
}
const CardAbout = ({ item }: { item: CardAboutProps }) => {
  return (
    <Card className="border-none rounded-none shadow-none ">
      <CardContent>
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex items-center gap-2 bg-green-800 text-white p-2 rounded-full justify-center w-24 h-24">
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
        </div>
      </CardContent>

      <CardFooter>
        <p className="text-gray-600 text-center">{item.content}</p>
      </CardFooter>
    </Card>
  );
};

export default CardAbout;
