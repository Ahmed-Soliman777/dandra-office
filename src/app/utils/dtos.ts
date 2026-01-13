export interface RegisterDTO {
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  image?: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface UpdateProfileDTO {
  username?: string;
  email?: string;
  password?: string;
}
