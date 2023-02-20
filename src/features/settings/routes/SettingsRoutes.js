import { Route, Routes } from "react-router-dom";
import TableCreation from "../scenes/form/TableCreation";

function SettingsRoutes() {
  return (
    <Routes>
      <Route path="/table/create" element={<TableCreation />} />
    </Routes>
  );
}

export default SettingsRoutes;
