import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import GreyBox from "../../../components/GreyBox";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


function UserInput(){
  return (
    <UserInputStyled>
      <GreyBox width='83' height="100%" padding="30">
        <Title>회원가입</Title>
        <InputWrapper>
          <InputStyled type="text" placeholder="이메일을 입력해주세요"/>
          <InputStyled type="text" placeholder="이름을 입력해주세요"/> 
          <InputStyled type="password" placeholder="비밀번호를 입력해주세요"/>
          <InputStyled type="password" placeholder="비밀번호를 한번 더 입력해주세요"/>
        </InputWrapper>
      </GreyBox>
      <GreyBox width='17' height="230px">
        <div style={{height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
          <FontAwesomeIcon icon={faCircleCheck} style={{fontSize: '36px', color: 'white'}}/>
        </div>
      </GreyBox>
    </UserInputStyled>
    
  )
}

const UserInputStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap:20px;
`; 

const Title = styled.h4`
  color: var(--color-white);
`; 

const InputWrapper = styled.div`
  height: 100%;
`;

const InputStyled = styled.input`
  all: unset;
  border-bottom: 1px solid white;
  width: 100%;
  line-height: 35px;
  color:var(--color-white);
  margin-top: 14px;
`;


const Form = styled.div`
  
`;
// const Form = styled.div`
// `; 
// const Form = styled.div`
// `; 

export default UserInput;