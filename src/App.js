import Navbar from "common/navbar";
import { HomeScreen, StepsScreen } from "screens";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const Container = styled.div`
  width: 86vw;
  margin: 0 7vw;
  padding-top: 10vh;
`;

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route
            path="/"
            exact
            caseSensitive={false}
            element={<HomeScreen />}
          />
          <Route
            path="/steps/:id"
            exact
            caseSensitive={false}
            element={<StepsScreen />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
