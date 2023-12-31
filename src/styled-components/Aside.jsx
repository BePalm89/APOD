import styled from "styled-components";

const Aside = styled.aside`
  grid-area: sidebar;
  border-right: 1px solid var(--white);
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    display: none;
  }
`;

export default Aside;
