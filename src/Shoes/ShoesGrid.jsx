import React, { useState } from "react";
import data from "./data.json";
import ShoesItemList from "./ShoesItemList";
import ModalBtn from "./ModalBtn";
const ShoesGrid = () => {
  const [ShoesList, setShoesList] = useState(data[0]);
  //Showmodal
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1 className="flex justify-center font-bold text-4xl">ShoesGrid</h1>
      <ShoesItemList
        setShoesList={setShoesList}
        data={data}
        setShowModal={setShowModal}
      />
      <ModalBtn
        data={data}
        ShoesList={ShoesList}
        showModal={showModal}
        setShowModal={setShowModal}
      ></ModalBtn>
    </div>
  );
};

export default ShoesGrid;
