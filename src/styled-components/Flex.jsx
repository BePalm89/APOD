import styled from "styled-components";

const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-basis: ${props => props.basis || 'auto'};
  gap: ${props => props.gap || '0px'};
`;

export default Flex;