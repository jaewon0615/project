import React from "react";
import Medicine from "../views/medicine";
import MedicineList from "../views/medicineList";
import MedicineSearch from "../views/medicineSearch";

export default function index() {
  return (
    <>
      <h1>약품 검색</h1>
      <Medicine />
      <h1>약품 검색 결과 리스트</h1>
      <MedicineList />
      <h1>약품 검색 결과 상세 페이지</h1>
      <MedicineSearch />
    </>
  );
}
