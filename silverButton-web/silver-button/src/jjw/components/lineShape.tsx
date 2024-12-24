/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as s from "../style/style";
import { FaRegCircle } from "react-icons/fa";
import { TbCircleHalfVertical } from "react-icons/tb";
import { GrAddCircle } from "react-icons/gr";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";

interface LineShape {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: {};
}

const lineShape: LineShape[] = [
  { id: 1, name: "없음", icon: <FaRegCircle />, style: s.circle },
  { id: 2, name: "(-)형", icon: <TbCircleHalfVertical />, style: s.minus },
  { id: 3, name: "(+)형", icon: <GrAddCircle />, style: s.ten },
  { id: 4, name: "기타", icon: <HiOutlineArrowUpCircle />, style: s.kita },
];

// 약품 분할선으로 선택

export default function Index02() {
  const [selectLine, setSelectLine] = useState<LineShape | null>(null);

  const handleLineShapeClick = (lineShape: LineShape) => {
    setSelectLine(lineShape);
  };

  return (
    <>
      <div css={s.line}>
        <div css={s.lineLi}>
          {lineShape.map((shape) => (
            <div
              key={shape.id}
              onClick={() => handleLineShapeClick(shape)}
              css={shape.style}
            >
              {shape.icon}
              {shape.name}
            </div>
          ))}
          <hr />
          <div>
            {selectLine && (
              <div>
                선택한 분할선:{selectLine.name} / 선택한 ID: {selectLine.id}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
