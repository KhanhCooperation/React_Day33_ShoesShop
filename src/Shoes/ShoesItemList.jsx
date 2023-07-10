import React from "react";
import ShoesItem from "./ShoesItem";

const ShoesList = (props) => {
  const { data, handleShoesList } = props;
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center">
      {data.map((item) => {
        return <ShoesItem item={item} handleShoesList={handleShoesList} />;
      })}
    </div>
  );
};

export default ShoesList;
