import React from "react";
import ShoesItem from "./ShoesItem";

const ShoesList = (props) => {
  const { data, setShoesList, handleShoesList, setShowModal } = props;
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center">
      {data.map((item) => {
        return (
          <ShoesItem
            setShoesList={setShoesList}
            item={item}
            handleShoesList={handleShoesList}
            setShowModal={setShowModal}
          />
        );
      })}
    </div>
  );
};

export default ShoesList;
