import Navbar from "common/navbar";
import { HomeScreen } from "screens";
import styled from "styled-components";

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
        <HomeScreen />
      </Container>
    </>
  );
}

export default App;
