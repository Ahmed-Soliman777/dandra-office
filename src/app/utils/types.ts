export interface JWTPayload {
  id: number;
  isAdmin: boolean;
  username: string;
}

export interface ProfileID {
  params: { id: string };
}

export interface ProductID {
  params: { id: string };
}

export interface CategoryID {
  params: { id: string };
}

export interface ReviewID {
  params: { id: string };
}

export interface CommentID {
  params: { id: string };
}

export interface LoginFormProps {
  loginWelcome: string;
  emailLabel: string;
  passwordLabel: string;
  rememberLabel: string;
  forgetPassword: string;
  submitButton: string;
}

export interface RegisterFormProps {
  usernameLabel: string;
  emailLabel: string;
  passwordLabel: string;
  confirmPasswordLabel: string;
  createAccountBtn: string;
}
