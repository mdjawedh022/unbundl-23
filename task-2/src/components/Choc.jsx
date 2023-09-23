import React from "react";
import "../styles/Choco.css";
import ChocoData from "./ChocoData";
import im1 from "../image/1.jpg";
import im2 from "../image/2.jpg";
import im3 from "../image/3.jpg";
import im4 from "../image/17.jpg";

const Choco = () => {
  return (
    <div className="choco">
      <h1>Popular Chocolates</h1>
      <p>Most dark chocolate is rich in plant chemicals called flavanols.</p>
      <ChocoData
        clName="first-choco"
        title="Dark Chocolate"
        text="Most dark chocolate is rich in plant chemicals called flavanols. Flavanols are antioxidants linked to a lower risk of heart disease. In theory, dark chocolate will contain higher flavanol content (greater health benefit). Milk chocolate contains much less, and white chocolate contains none."
        img1={im1}
        img2={im2}
      />
      <ChocoData
        clName="first-choco-reverse"
        title="Candy"
        img1={im4}
        img2={im3}
        text="Candy is made by dissolving sugar in water or milk to form a syrup, which is boiled until it reaches the desired concentration or starts to caramelize. The type of candy depends on the ingredients and how long the mixture is boiled. Candy comes in a wide variety of textures, from soft and chewy to hard and brittle.People like candy because it tastes good, brings back positive memories, satisfies their sweet tooth, is aesthetically pleasing, and is addictive."
      />
    </div>
  );
};

export default Choco;
