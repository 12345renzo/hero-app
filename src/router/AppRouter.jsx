import { Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function AppRouter() {

  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoutes>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />
        {/*<Route path="/*" element={<HeroesRoutes/>} />*/}
      </Routes>
    </>
  );
}

export default AppRouter