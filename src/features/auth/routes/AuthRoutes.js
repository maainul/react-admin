import { Route, Routes } from "react-router-dom";
import { userInputs } from "../formSource/userInputs";
import Registration from "../scenes/form/Registration";

function AuthRoutes() {
  return (
    <Routes>
      <Route
        path="/registration"
        element={<Registration input={userInputs} />}
      />
    </Routes>
  );
}

export default AuthRoutes;
