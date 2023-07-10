import React, { useState } from "react";
import data from "./data.json";
import ShoesItemList from "./ShoesItemList";
import ModalBtn from "./ModalBtn";
const ShoesGrid = () => {
  const [ShoesList, setShoesList] = useState(data[0]);
  const handleShoesList = (value) => {
    setShoesList(value);
  };

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl">ShoesGrid</h1>
      <ShoesItemList handleShoesList data={data} />
      <ModalBtn data={data}></ModalBtn>
    </div>
  );
};

export default ShoesGrid;
