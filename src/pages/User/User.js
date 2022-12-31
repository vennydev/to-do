import styled from "styled-components";
import userBg from '../../assets/login_bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBatteryThreeQuarters, faUserPlus, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import GreyBox from "../../components/GreyBox";
import UserInput from "./components/UserInput";

function User({data}) {
  const { title, url } = data;
  return (
      <UserStyled>
        <BackDrop>
          <FontAwesomeIcon icon={faChevronDown} size="3x" style={{color: 'rgb(21 21 21)', marginTop: '20px'}}/>
            <InputWrapper>
              <InputHeader>
                <InputHeaderLeft>
                  <Dots>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </Dots>
                  <div>
                    SIM없음
                  </div>
                  <FontAwesomeIcon icon={faWifi} style={{marginBottom: '3px'}} />
                </InputHeaderLeft>
                <InputHeaderRight>
                  <div style={{height:'20px', lineHeight: '24px'}}>78%</div>
                  <FontAwesomeIcon icon={faBatteryThreeQuarters} size="2x"/>
                </InputHeaderRight>
              </InputHeader>
              <div>
                <BoxWrapper>
                  <GreyBox width='50'>
                    <IconWrapper>
                      <Circle>
                        <FontAwesomeIcon icon={faUserPlus} size="2xl"/>
                      </Circle>
                      <Circle>
                        <FontAwesomeIcon icon={faWifi} size="2xl"/>
                      </Circle>
                      <Circle>
                        <FontAwesomeIcon icon={faUser} size="2xl" />
                      </Circle>
                      <Circle>
                        <FontAwesomeIcon icon={faComment} size="2xl"/>
                      </Circle>
                    </IconWrapper>
                  </GreyBox>
                  <GreyBox width='50'/>
                </BoxWrapper>
                <BoxWrapper>
                  
                    <UserInput/>
                </BoxWrapper>
              </div>
            </InputWrapper>
        </BackDrop>
      </UserStyled>
  )
}

const UserStyled = styled.div`
  background-image: url(${userBg});
  background-position: center;
  background-size: cover;
  width:550px;
  margin: 0 auto;
  height: 100%;
`; 

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background-color: rgba(210, 210, 210, .2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`; 

const InputWrapper = styled.div`
  height: 65%;
  padding: 0 35px;
`; 

const InputHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:var(--color-white);
  padding:0 10px;
`; 

const InputHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap:7px;
`; 

const InputHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
`;

const Dots = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 5px;
  list-style: none;
  gap:2px;

  li {
    width: 4px;
    height: 4px;
    background-color: var(--color-white);
    border-radius: 50%;
  }
`; 
const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap:20px;
`; 

const IconWrapper = styled.ul`
  padding:0;
  height: 100%;
  list-style: none;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Circle = styled.li`
  color: var(--color-white);
  width: 76px;
  height: 76px;
  background-color: rgba(94, 94, 94, 0.24);
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

// const InputHeaderLeft = styled.div`
// `; 
// const InputHeaderLeft = styled.div`
// `; 
// const InputHeaderLeft = styled.div`
// `; 
// const InputHeaderLeft = styled.div`
// `; 

export default User;