import * as s from "../style/style";
import DrugShape from "../components/drugShape";
import ColorShape from "../components/colorShape";
import LineShape from "../components/lineShape";
import ButtonShape from "../components/buttonShape";

function medicine() {
  return (
    <div css={s.contSt}>
      <>
        <div css={s.headerSt}>
          <div css={s.titleSt}>실버니즈 약품 검색</div>
        </div>
        <div css={s.bodySt}>
          {/* 약품 이름 검색 */}
          <div css={s.nameSt}>
            약품 이름으로 검색🔍{" "}
            <input
              css={s.inputSt}
              type="text"
              placeholder="검색하고자하는 약품 이름을 입력해주세요."
            />
          </div>
        </div>
      </>
      <DrugShape />
      <ColorShape />
      <LineShape />
      <ButtonShape />
    </div>
  );
}

export default medicine;
