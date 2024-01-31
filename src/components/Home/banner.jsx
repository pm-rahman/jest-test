import React from "react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="bg-secondary p-14 flex items-center rounded-md mt-5 min-h-96">
      <div className="w-3/4 space-y-3">
        <h1>Header</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          beatae veritatis assumenda blanditiis dolorum dolore maxime enim
          impedit provident sed illum nam error aliquam fugit sunt laborum,
          dignissimos facere nostrum eius quidem ullam cum aut iste. Asperiores
          qui reprehenderit porro eligendi placeat sed tempore magnam, vero
          tempora beatae adipisci veritatis.
        </p>
        <Button size="lg">Button</Button>
      </div>
    </div>
  );
};

export default Banner;
