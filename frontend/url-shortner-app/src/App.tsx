import * as React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Container from "./components/container/container";

// in typescript, interfaces are used to define types of props that a component can accpet, like a schema or blueprint
interface IAppProps {}

// function component is something that returns jsx format
// our App is being declared to be a FunctionComponent that takes IAppProps props
const App: React.FunctionComponent<IAppProps> = () => {
  return (
    // React must return a single component
    // hence everything is enclosed in an empty fragment <></>
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
