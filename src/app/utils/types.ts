export interface JWTPayload {
  id: number;
  isAdmin: boolean;
  username: string;
}

export interface ProfileID {
  params: Promise<{ id: string }>;
}

export interface ProductID {
  params: Promise<{ id: string }>;
}

export interface CategoryID {
  params: Promise<{ id: string }>;
}

export interface ReviewID {
  params: Promise<{ id: string }>;
}

export interface CommentID {
  params: Promise<{ id: string }>;
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

export interface product {
  id?: number;
  price?: number;
  productNameAr?: string;
  productNameEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  quantity?: number;
  images?: string[];
  categoryId?: number;
  reviews?: review[];
}

export interface review {
  id: number;
  productId: number;
  reviewInNumbers: number;
  user?: {
    id: number;
    username: string;
  };
}

export interface category {
  id?: number;
  categoryNameAr?: string;
  categoryNameEn?: string;
  categoryThumbnail?: string;
  products?: product[];
}

export interface productDetails {
  id: number;
  productNameAr: string;
  productNameEn: string;
  price: number;
  descriptionAr: string;
  descriptionEn: string;
  quantity: number;
  images: string[];
  category: category;
  reviews: review;
}

export interface CategoriesData {
  id: number;
  categoryNameAr: string;
}

export interface User {
  id?: number;
  username?: string;
}

export interface Comment {
  id: number;
  comment: string;
  user: User;
}

export interface Favorite {
  id: number;
  productId: number;
  product?: product;
}
