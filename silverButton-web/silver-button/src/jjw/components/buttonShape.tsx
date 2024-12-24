/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as s from "../style/style";

interface ButtonShape {
  id: number;
  name: string;
  style: {};
}

const buttonShape: ButtonShape[] = [
  { id: 1, name: "검색", style: s.fiButton1 },
  { id: 2, name: "초기화", style: s.fiButton2 },
  { id: 3, name: "검색", style: s.s1buttonSt },
];

export default function Index03() {
  const [selectButton, setSelectButton] = useState<ButtonShape | null>(null);

  const handleButtonClick = (buttonShape: ButtonShape) => {
    setSelectButton(buttonShape);
  };

  return (
    <>
      {buttonShape.map((shape) => (
        <div
          key={shape.id}
          onClick={() => handleButtonClick(shape)}
          css={shape.style}
        >
          {shape.name}
        </div>
      ))}
      <hr />
      <div>
        {selectButton && (
          <div>
            선택한 버튼:{selectButton.name} / 선택한ID:{selectButton.id}
          </div>
        )}
      </div>
    </>
  );
}
