import React from "react";
import "./App.scss";
// import router
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/Routes";
import LoaderScreen from "./components/main/LoadingScreen";

const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3200);
  }, []);

  return <Router>{loaded ? <Routes /> : <LoaderScreen />}</Router>;
};
export default App;
