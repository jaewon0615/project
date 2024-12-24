import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { TbOvalVertical } from "react-icons/tb";
import { FaRegSquare } from "react-icons/fa";
import { BiCircleHalf } from "react-icons/bi";
import { FiTriangle } from "react-icons/fi";
import { CgShapeRhombus } from "react-icons/cg";
import { LuRectangleHorizontal } from "react-icons/lu";
import { LuPentagon } from "react-icons/lu";
import { MdOutlineHexagon } from "react-icons/md";
import { FiOctagon } from "react-icons/fi";
import * as s from "../style/style";

interface DrugShape {
  id: number;
  name: string;
  icon: React.ReactNode;
  style: {};
}

// 약품 모양으로 선택

const drugShapes: DrugShape[] = [
  { id: 1, name: "원형", icon: <FaRegCircle />, style: s.circle },
  { id: 2, name: "타원형", icon: <TbOvalVertical />, style: s.taone },
  { id: 3, name: "사각형", icon: <FaRegSquare />, style: s.box },
  { id: 4, name: "반원형", icon: <BiCircleHalf />, style: s.halfSquare },
  { id: 5, name: "삼각형", icon: <FiTriangle />, style: s.triangle },
  { id: 6, name: "마름모형", icon: <CgShapeRhombus />, style: s.mamo },
  { id: 7, name: "장방형", icon: <LuRectangleHorizontal />, style: s.jangbang },
  { id: 8, name: "오각형", icon: <LuPentagon />, style: s.okak },
  { id: 9, name: "육각형", icon: <MdOutlineHexagon />, style: s.six },
  { id: 10, name: "팔각형", icon: <FiOctagon />, style: s.eight },
];

export default function Index() {
  const [selectedShape, setSelectedShape] = useState<DrugShape | null>(null);

  const handleDrugShapeClick = (drugShape: DrugShape) => {
    setSelectedShape(drugShape);
  };

  return (
    <>
      <div css={s.shapeSt}>
        <div css={s.shapeLt}>
          {drugShapes.map((shape) => (
            <div
              key={shape.id}
              onClick={() => handleDrugShapeClick(shape)}
              css={shape.style}
            >
              {shape.icon}
              {shape.name}
            </div>
          ))}
          <hr />
          <div>
            {selectedShape && (
              <div>
                선택한 모양: {selectedShape.name} / 선택한 ID:{" "}
                {selectedShape.id}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
