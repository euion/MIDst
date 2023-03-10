import {
  Layout,
  Box,
  Form,
  Logo,
  Input,
  Button,
  BottomWrapper,
  OtherButton,
  Title,
  PasswordButton,
} from "../styles/Register.styled";
import { ROUTES } from "../enum/routes";
import * as Api from "../api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../stores/UserAtom";
import { useSetRecoilState } from "recoil";

interface LoginData {
  email: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const setUserLogin = useSetRecoilState(userState);

  const [form, setForm] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await Api.post("user/login", form);
      if (typeof res.data !== "object") {
        alert(res.data);
      } else {
        window.localStorage.setItem("accessToken", res.data.accessToken);
        window.localStorage.setItem("refreshToken", res.data.refreshToken);
        setUserLogin(true);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Logo />
          <Title>Sign In</Title>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
          ></Input>
          <PasswordButton to={ROUTES.USER.FIND_PW}>
            Forgot password?
          </PasswordButton>
          <Button type="submit">Sign In</Button>
          <BottomWrapper>
            <p>Don't have an account?</p>
            <OtherButton to={ROUTES.USER.REGISTER}>Sign Up</OtherButton>
          </BottomWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default LoginPage;
