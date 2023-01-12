import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { signIn, isAuthenticated } from './auth/helper';
import { Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SigninForm = () => {
  const [values, setValues] = useState({
    userid: '',
    password: '',
    error: null,
    didRedirect: false,
  });

  const { userid, password, error, didRedirect } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signIn({ userid, password })
      .then((data) => {
        if (data.status === 'failed') {
          setValues({ ...values, error: data.error });
        } else {
          localStorage.setItem('jwt', JSON.stringify(data));
          setValues({
            ...values,
            didRedirect: true,
          });
        }
      })
      .catch(console.log('signin request failed'));
  };

  const handleChange = (fieldname) => (event) => {
    setValues({ ...values, error: false, [fieldname]: event.target.value });
  };

  const errorMessage = () => {
    toast(error, {
      type: 'error',
    });
  };

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      return <Redirect to='/homepage' />;
    }
    if (isAuthenticated()) {
      return <Redirect to='/signin' />;
    }
  };

  return (
    <div id='form_container'>
      <ToastContainer />
      {errorMessage()}
      {performRedirect()}
      <div id='signin_form'>
        <div>
          <span id='form_heading'>SignIn Form</span>
        </div>
        <div id='form_content'>
          <Form>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                id='signin_email_input'
                name='userid'
                placeholder='Enter your email id'
                type='email'
                onChange={handleChange('userid')}
              />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Input
                id='signin_password_input'
                name='password'
                placeholder='Enter your password'
                type='password'
                onChange={handleChange('password')}
              />
            </FormGroup>
            <Button id='signin_btn' onClick={onSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
