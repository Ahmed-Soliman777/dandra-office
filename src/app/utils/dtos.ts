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

export interface AddNewProduct {
  productNameAr: string;
  productNameEn: string;
  price: number;
  categoryId: number;
  descriptionAr: string;
  descriptionEn: string;
  quantity: number;
  images: string[];
}

export interface UpdateProductDTO {
  productNameAr?: string;
  productNameEn?: string;
  price?: number;
  categoryId?: number;
  descriptionAr?: string;
  descriptionEn?: string;
  quantity?: number;
  images?: string[];
}

export interface AddCategoryDTO {
  categoryNameAr: string;
  categoryNameEn: string;
  categoryThumbnail: string;
}

export interface UpdateCategoryDTO {
  categoryNameAr?: string;
  categoryNameEn?: string;
  categoryThumbnail?: string;
}

export interface AddReviewDTO {
  reviewInNumbers: number;
  productId: number;
}

export interface UpdateReviewDTO {
  reviewInNumbers?: number;
}

export interface AddCommentDTO {
  comment: string;
  productId: number;
}

export interface UpdateCommentDTO {
  comment?: string;
}

export interface FavoriteDTO {
  productId: number;
}
