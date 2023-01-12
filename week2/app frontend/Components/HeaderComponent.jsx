import {
  Header,
  BrandLogoPortion,
  NavItemList,
  BrandTitle,
  BrandLogo,
  ListItem,
  Portfolio,
} from './Styling/HeaderStyle';
import { isAuthenticated, signOut } from './auth/helper';
import resturentlogo from './Images/resturentlogo.png';
import { Redirect, useHistory, Link } from 'react-router-dom';

const HeaderComponent = () => {
  const history = useHistory();

  let redirectBackHome = () => history.push('/signin');

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to='/homepage' />;
    }
  };

  return (
    <Header>
      {performRedirect()}
      <BrandLogoPortion>
        <BrandLogo src={resturentlogo} alt='Logo' />
        <BrandTitle key='brandtitle'>Food Villa</BrandTitle>
      </BrandLogoPortion>
      <NavItemList>
        {isAuthenticated() && (
          <ListItem
            key='greeting'
            style={{
              color: '#A30000',
              fontSize: '1.2rem',
            }}>
            Welcome,&nbsp;
            {JSON.parse(localStorage.getItem('jwt')).data.username}
          </ListItem>
        )}
        <ListItem key='aboutme'>
          <Portfolio href='https://arttwis.github.io' key='aboutmelink'>
            About Me
          </Portfolio>
        </ListItem>
        {!isAuthenticated() && (
          <ListItem key='signup'>
            <Link
              to='/signup'
              style={{ color: '#333333', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </ListItem>
        )}
        {!isAuthenticated() && (
          <ListItem key='signin'>
            <Link
              to='/signin'
              style={{ color: '#333333', textDecoration: 'none' }}>
              Sign In
            </Link>
          </ListItem>
        )}
        {isAuthenticated() && (
          <ListItem
            key='signout'
            onClick={() => {
              signOut(() => {
                redirectBackHome();
              });
            }}>
            Signout
          </ListItem>
        )}
      </NavItemList>
    </Header>
  );
};

export default HeaderComponent;
