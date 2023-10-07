import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 48px 3fr;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";

  color: var(--white);
  text-align: center;

  @media (max-width: 650px) {
    grid-template-areas:
      "header header"
      "main main"
      "footer footer";
  }
`;

export default Container;
