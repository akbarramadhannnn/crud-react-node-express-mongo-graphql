import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_USER } from '../../GraphQL/Auth/Mutation';
import { useMutation } from '@apollo/client';
import SignupWrapper, { Card, FormGroup, Button } from './SignupStyles';

const Index = () => {
  const [namaDepan, setNamaDepan] = useState('');
  const [namaBelakang, setNamaBelakang] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { error }] = useMutation(SIGN_IN_USER);

  const handleChangeInput = useCallback((e) => {
    const { value, name } = e.target;

    if (name === 'namaDepan') {
      setNamaDepan(value);
    }

    if (name === 'namaBelakang') {
      setNamaBelakang(value);
    }

    if (name === 'gender') {
      setGender(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  }, []);

  const handleSubmitSignin = useCallback(
    (e) => {
      register({
        variables: {
          namaDepan: namaDepan,
          namaBelakang: namaBelakang,
          gender: gender,
          email: email,
          password: password,
        },
      });
      setNamaDepan('');
      setNamaBelakang('');
      setGender('');
      setEmail('');
      setPassword('');
    },
    [register, namaDepan, namaBelakang, gender, email, password]
  );

  if (error) {
    return <h2>Error</h2>;
  }

  return (
    <SignupWrapper>
      <Card>
        <FormGroup>
          <label>Nama Depan</label>
          <input
            placeholder="nama depan"
            name="namaDepan"
            type="text"
            value={namaDepan}
            onChange={handleChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <label>Nama Belakang</label>
          <input
            placeholder="nama belakang"
            name="namaBelakang"
            type="text"
            value={namaBelakang}
            onChange={handleChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <label>Gender</label>
          <select
            name="gender"
            type="text"
            value={gender}
            onChange={handleChangeInput}
          >
            <option>Silahkan Pilih Gender</option>
            <option value="L">Laki - Laki</option>
            <option value="P">Perempuan</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Email</label>
          <input
            placeholder="email"
            name="email"
            type="text"
            value={email}
            onChange={handleChangeInput}
          />
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <input
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChangeInput}
          />
        </FormGroup>

        <p>
          Already Have an Account ? <Link to="/signin">Here</Link>
        </p>

        <Button onClick={handleSubmitSignin}>Sign Up</Button>
      </Card>
    </SignupWrapper>
  );
};

export default Index;
