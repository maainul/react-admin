import {Route, Routes} from "react-router-dom";
import Registration from "../scenes/form/Registration";

function AuthRoutes(){
    return(
        <Routes>
            <Route path="/registration" element={<Registration />}/>
        </Routes>
    )
}

export default AuthRoutes;