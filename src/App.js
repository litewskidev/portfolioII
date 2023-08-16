import { useEffect } from "react";
import { fetchLangEng, getFetchedLang } from "./redux/languageRedux.js";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavbarTop from './components/NavbarTop/NavbarTop.jsx';
import Main from "./components/Main/Main.jsx";
import E404 from "./components/E404/E404.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLangEng());
  }, [dispatch]);

  const data = useSelector(getFetchedLang);

  return(
    <main id="app">
      <NavbarTop data={data}/>
      <Routes>
        <Route exact path="/" element={ <Main data={data} /> } />
        <Route path="*" element={ <E404 /> } />
      </Routes>
    </main>
  )
};

export default App;
