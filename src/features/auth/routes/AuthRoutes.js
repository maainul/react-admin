import {Route, Routes} from "react-router-dom";
import Registration from "../scenes/form/Registration";

function AuthRoutes(){
    return(
        <Routes>
            <Route path="/register" element={<Registration />}/>
        </Routes>
    )
}