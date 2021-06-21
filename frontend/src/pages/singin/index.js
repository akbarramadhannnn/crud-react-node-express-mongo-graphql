import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import SignupWrapper, { Card, FormGroup, Button } from './SigninStyles';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeInput = useCallback((e) => {
    const { value, name } = e.target;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  }, []);

  const handleSubmitSignin = useCallback(
    (e) => {
      console.log('email', email);
      console.log('password', password);
    },
    [email, password]
  );

  return (
    <SignupWrapper>
      <Card>
        <FormGroup>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="nama email"
            value={email}
            onChange={handleChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="nama password"
            value={password}
            onChange={handleChangeInput}
          />
        </FormGroup>

        <p>
          Don't Have an Account ? <Link to="/signup">Here</Link>
        </p>

        <Button onClick={handleSubmitSignin}>Sign In</Button>
      </Card>
    </SignupWrapper>
  );
};

export default Index;
