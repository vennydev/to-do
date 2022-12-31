import User from './pages/User/User';
import GlobalStyle from './styles/GlobalStyle';

const isUser = true;

const LOGIN_DATA = {
    title: '로그인',
    url: '/login',
}

const JOIN_DATA = {
    title: '회원가입',
    url: '/signin',
}

function App() {
  return (
    <>
      <GlobalStyle/>
      <User data={isUser ? LOGIN_DATA : JOIN_DATA}/>
    </>
  );
}

export default App;
