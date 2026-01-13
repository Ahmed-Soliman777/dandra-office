export interface JWTPayload {
  id: number;
  isAdmin: boolean;
  username: string;
}

export interface ProfileID {
  params: { id: string };
}
