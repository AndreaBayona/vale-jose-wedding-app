import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import {ImageBackground} from "../components/ImageBackground";
import {RightImage, LeftImage} from "./styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <ImageBackground imageRoute="../img/imgs/Cover.png"/>
      <RightImage src="../img/imgs/coverRight.png"/>
      <LeftImage src="../img/imgs/coverLeft.png"/>
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.path}
              path={routeItem.path}
              element={routeItem.component}
            />
          );
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
