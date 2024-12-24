/* @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import Medicine from "./jjw/views/medicine";
import MedicineList from "./jjw/views/medicineList";
import MedicineSearch from "./jjw/views/medicineSearch"

export default function App() {

  return (
    <>
          <Routes>
            <Route path="/medicine" element={<Medicine />} />

            <Route path="/medicinelist" element={<MedicineList />} />

            <Route path="/medicinesearch" element={<MedicineSearch />} />

          </Routes>
      </>
  );
}
