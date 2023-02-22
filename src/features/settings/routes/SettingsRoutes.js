import { Route, Routes } from "react-router-dom";
import TableCreation from "../scenes/form/TableCreation";
import AttributeCreation from "../scenes/form/AttributeCreation";

function SettingsRoutes() {
  return (
    <Routes>
      <Route path="/table/create" element={<TableCreation />} />
      <Route path="/attribute/create" element={<AttributeCreation />} />
    </Routes>
  );
}

export default SettingsRoutes;
