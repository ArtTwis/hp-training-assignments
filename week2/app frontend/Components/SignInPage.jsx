import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SigninForm from './SigninForm';
import './FormPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = () => (
  <>
    <HeaderComponent />
    <SigninForm />
    <FooterComponent />
  </>
);

export default SignInPage;
