/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as s from "../style/style";
import {colorShape} from "./drugOptionData";
import {drugShape} from "./drugOptionData";
import {lineShape} from "./drugOptionData"
import { DrugShape } from "./drugOptionData";
import { ColorShape } from "./drugOptionData";
import { LineShape } from "./drugOptionData";

// 약품 검색 옵션 상태 관리 (useState)
interface SelectedDrugOption {
  shape: DrugShape[];
  color: ColorShape[];
  line: LineShape[];
}

const selectedDrugOption: SelectedDrugOption = {
  shape:drugShape,
  color:colorShape,
  line:lineShape
}

export default function Index01() {
  const [selectedDrugOption, setSelectedDrugOption] = useState<SelectedDrugOption>();

  const handleColorShapeClick = (selectedDrugOption: SelectedDrugOption) => {
    setSelectedDrugOption(selectedDrugOption);
  };

  return (
    <>
      <div css={s.csearchSt}>
        <div css={s.colorLt}>
          {colorShape.map((shape) => (
            <div
              key={shape.id}
              onClick={() => handleColorShapeClick(shape)}
              css={shape.style} 
            >
              {shape.name}
            </div>
          ))}
          <hr />
          <div>
            {selectedDrugOption && (
              <div>
                선택한 색상: {selectedDrugOption.color} / 선택한 모양: {selectedDrugOption.shape} / 선택한 분할선:{selectedDrugOption.line}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
