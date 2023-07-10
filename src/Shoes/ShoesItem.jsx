import React from "react";

const ShoesItem = (props) => {
  const { item, setShoesList, handleShoesList, setShowModal } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={item.image} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base font-bold">${item.price}</p>
          <p className="mt-3">
            <bold className="font-bold">About: </bold>
            {item.shortDescription}
          </p>
          <button
            class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mt-3"
            onClick={() => {
              setShoesList(item);
              setShowModal(true);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoesItem;
