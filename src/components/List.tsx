import React, { useState } from "react";

interface dataListItem {
  name: string;
  price: number;
}

export default function List() {
  const data: dataListItem[] = [
    { name: "Item A", price: 125 },
    { name: "Item B", price: 230 },
    { name: "Item C", price: 295 },
    { name: "Item D", price: 245 },
    { name: "Item E", price: 900 },
    { name: "Item F", price: 875 },
    { name: "Item G", price: 235 },
    { name: "Item H", price: 400 },
  ];

  const [sortData, setSortData] = useState<Array<dataListItem>>([]);
  const [showHide, setShowHide] = useState<boolean>(false);

  const onClickButton = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const d = data.sort((a, b): number => a.price - b.price);
    setSortData(d);
    setShowHide(!showHide);
  };

  return (
    <div>
      {showHide
        ? sortData.map(({ name, price }) => {
            return (
              <div key={name}>
                {name} {price}
              </div>
            );
          })
        : ""}
      <button onClick={onClickButton}>
        {!showHide ? "Show list" : "Hide list"}
      </button>
    </div>
  );
}
