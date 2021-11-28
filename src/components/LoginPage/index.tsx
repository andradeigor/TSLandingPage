import React from "react";
import {
  LoginPageWarper,
  LoginPageImageWarper,
  LoginPageImage,
  LoginPageFormWarper,
  LoginPageFormContainer,
  LoginPageFormTitle,
  LoginPageFormItemWarper,
  LoginPageFormItemTitle,
  LoginPageFormItem,
  LoginPageButtonArea,
  LoginPageButton,
  LoginPageButtonSubTex,
  LoginPageButtonSubTexLink,
  LoginPageOAuthSubText,
  LoginPageOAuthArea,
  LoginPageOAuthButton,
} from "./style";
import ImagePath from "../../assets/background.jpeg";
/*
 */
const LoginPage: React.FC = () => {
  return (
    <LoginPageWarper>
      <LoginPageImageWarper>
        <LoginPageImage alt="background image" src={ImagePath} />
      </LoginPageImageWarper>
      <LoginPageFormWarper>
        <LoginPageFormContainer>
          <LoginPageFormTitle>Welcome to Jammy</LoginPageFormTitle>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Full Name</LoginPageFormItemTitle>
            <LoginPageFormItem placeholder="John Doe"></LoginPageFormItem>
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Email</LoginPageFormItemTitle>
            <LoginPageFormItem placeholder="Enter your Email here"></LoginPageFormItem>
          </LoginPageFormItemWarper>
          <LoginPageFormItemWarper>
            <LoginPageFormItemTitle>Password</LoginPageFormItemTitle>
            <LoginPageFormItem placeholder="Enter your Password"></LoginPageFormItem>
          </LoginPageFormItemWarper>
          <LoginPageButtonArea>
            <LoginPageButton>Create Account</LoginPageButton>
            <LoginPageButtonSubTex>
              Already have an account?{" "}
              <LoginPageButtonSubTexLink>Log in</LoginPageButtonSubTexLink>
            </LoginPageButtonSubTex>
          </LoginPageButtonArea>
          <LoginPageOAuthSubText>OR</LoginPageOAuthSubText>
          <LoginPageOAuthArea>
            <LoginPageOAuthButton></LoginPageOAuthButton>
            <LoginPageOAuthButton></LoginPageOAuthButton>
          </LoginPageOAuthArea>
        </LoginPageFormContainer>
      </LoginPageFormWarper>
    </LoginPageWarper>
  );
};

export default LoginPage;
