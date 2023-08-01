import { useEffect } from "react";
import { fetchLangPl, getFetchedLang } from "./redux/languageRedux";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavbarTop from './components/NavbarTop/NavbarTop.jsx';
import Main from "./components/Main/Main";
import E404 from "./components/E404/E404";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLangPl());
  }, [dispatch]);

  //const data = useSelector(getFetchedLang);

  return(
    <main id="app">
      <NavbarTop />
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route path="*" element={ <E404 /> } />
      </Routes>
    </main>
  )
};

export default App;
