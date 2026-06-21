export interface JWTPayload {
  id: string;
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
  id?: string;
  price?: number;
  productNameAr?: string;
  productNameEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  quantity?: number;
  images?: string[];
  categoryId?: string;
  reviews?: review[];
  comments?: Comment[];
}

export interface review {
  id: string;
  productId: string;
  reviewInNumbers: number;
  user?: {
    id: string;
    username: string;
  };
}

export interface category {
  id?: string;
  categoryNameAr?: string;
  categoryNameEn?: string;
  categoryThumbnail?: string;
  products?: product[];
}

export interface productDetails {
  id: string;
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
  id: string;
  categoryNameAr: string;
}

export interface User {
  id?: string;
  username?: string;
}

export interface Comment {
  id: string;
  comment: string;
  user: User;
}

export interface Favorite {
  id: string;
  productId: string;
  product?: product;
}

export interface UiState {
  isLoading: boolean;
}
