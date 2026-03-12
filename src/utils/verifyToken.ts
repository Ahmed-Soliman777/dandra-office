import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { JWTPayload } from "./types";

export function verifyToken(request: NextRequest): JWTPayload | null {
  try {
    // 1- add variable to get token from cookies
    const jwtToken = request.cookies.get("token");

    // 2- get token value from cookies
    const token = jwtToken?.value as string;

    // 3- check token
    if (!token) {
      return null;
    }

    // 4- verify token
    const userPayload = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JWTPayload;

    // 5- return user data
    return userPayload;
  } catch (error) {
    return null;
  }
}

export function verifyTokenForPage(token: string): JWTPayload | null {
  try {
    const userPayload = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JWTPayload;

    if (!userPayload) {
      return null;
    }

    return userPayload;
  } catch (error) {
    return null;
  }
}
