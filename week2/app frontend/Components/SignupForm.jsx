import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { signUp } from './auth/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const SignupForm = () => {
  const [values, setValues] = useState({
    username: '',
    userid: '',
    password: '',
    error: null,
  });

  const { username, userid, password, error } = values;

  const handleChange = (fieldname) => (event) => {
    setValues({ ...values, error: false, [fieldname]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signUp({ username, userid, password })
      .then((data) => {
        console.log('🚀data :', data);
        if (data.status === 'failed') {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            username: '',
            userid: '',
            password: '',
          });
        }
      })
      .catch(console.log('signup request failed'));
  };

  const errorMessage = () => {
    toast(error, {
      type: 'error',
    });
  };

  return (
    <div id='form_container'>
      <ToastContainer />
      {errorMessage()}
      <div id='signup_form'>
        <div>
          <span id='form_heading'>SignUp Form</span>
        </div>
        <div id='form_content'>
          <Form>
            <FormGroup>
              <Label for='username'>Username</Label>
              <Input
                id='signup_username_input'
                name='username'
                placeholder='Enter your username'
                type='text'
                value={username}
                onChange={handleChange('username')}
              />
            </FormGroup>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                id='signup_email_input'
                name='userid'
                placeholder='Enter your email id'
                type='email'
                value={userid}
                onChange={handleChange('userid')}
              />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Input
                id='signup_password_input'
                name='password'
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={handleChange('password')}
              />
            </FormGroup>
            <Button id='signup_btn' onClick={onSubmit}>
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
