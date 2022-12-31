import styled from "styled-components";

function GreyBox({children, width, height, padding}) {
  console.log(padding);
  return (
    <GreyBoxStyled width={width} height={height} padding={padding}>
      {children}
    </GreyBoxStyled>
  )
}

const GreyBoxStyled = styled.div`
  width: ${props => `${props.width}%`};
  min-height: 230px;
  height: ${props => `${props.height}`};
  padding: ${props => props.padding ? `${props.padding}px` : '20px'} ;
  position: relative;
  background-color: rgba(32, 32, 32, 0.71);
  border-radius: 28px;
`; 

export default GreyBox;