import styled from "styled-components";

const Aside = styled.aside`
  grid-area: sidebar;
  border-right: 1px solid var(--white);

  @media (max-width: 650px) {
    display: none;
  }
`;

export default Aside;
