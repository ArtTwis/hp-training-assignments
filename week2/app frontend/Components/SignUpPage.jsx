import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SignupForm from './SignupForm';
import './FormPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => (
  <>
    <HeaderComponent />
    <SignupForm />
    <FooterComponent />
  </>
);

export default SignUpPage;
