/**
 * Example Jest Test File for Frontend Functions
 *
 * This file demonstrates how to write tests for validation schemas
 * Testing approach:
 * 1. Test valid inputs - ensure functions accept correct data
 * 2. Test invalid inputs - ensure functions reject incorrect data
 * 3. Test edge cases - test boundary conditions
 */

import * as z from "zod";
import {
  loginSchema,
  registerSchema,
  updateUserProfileSchema,
} from "@/utils/validationSchemas";

describe("Register Validation Schema", () => {
  // Test successful validation with correct data
  describe("Valid inputs", () => {
    it("should validate a correct registration", () => {
      const validData = {
        userName: "johndoe",
        email: "john@example.com",
        password: "SecurePass123!@#",
      };

      // The validate function with a valid object should not throw an error
      expect(() => registerSchema.parse(validData)).not.toThrow();
    });

    it("should accept usernames between 2 and 25 characters", () => {
      const data = {
        userName: "ab",
        email: "test@example.com",
        password: "SecurePass123!@#",
      };

      expect(() => registerSchema.parse(data)).not.toThrow();
    });
  });

  // Test input validation failures
  describe("Invalid inputs", () => {
    it("should reject usernames shorter than 2 characters", () => {
      const invalidData = {
        userName: "a",
        email: "test@example.com",
        password: "SecurePass123!@#",
      };

      // Using expect().toThrow() to check if validation throws an error
      expect(() => registerSchema.parse(invalidData)).toThrow(z.ZodError);
    });

    it("should reject invalid email addresses", () => {
      const invalidData = {
        userName: "johndoe",
        email: "invalid-email",
        password: "SecurePass123!@#",
      };

      expect(() => registerSchema.parse(invalidData)).toThrow(z.ZodError);
    });

    it("should reject passwords that don't meet complexity requirements", () => {
      const invalidData = {
        userName: "johndoe",
        email: "john@example.com",
        password: "weakpassword", // Missing uppercase, numbers, and special chars
      };

      expect(() => registerSchema.parse(invalidData)).toThrow(z.ZodError);
    });

    it("should reject usernames longer than 25 characters", () => {
      const invalidData = {
        userName: "a".repeat(26), // 26 characters, exceeds limit
        email: "test@example.com",
        password: "SecurePass123!@#",
      };

      expect(() => registerSchema.parse(invalidData)).toThrow(z.ZodError);
    });
  });

  // Test edge cases
  describe("Edge cases", () => {
    it("should validate a username at maximum length (25 characters)", () => {
      const data = {
        userName: "a".repeat(25),
        email: "test@example.com",
        password: "SecurePass123!@#",
      };

      expect(() => registerSchema.parse(data)).not.toThrow();
    });

    it("should handle special characters in password", () => {
      const data = {
        userName: "johndoe",
        email: "test@example.com",
        password: "SecurePass123!@#$%^&*",
      };

      expect(() => registerSchema.parse(data)).not.toThrow();
    });
  });
});

describe("Login Validation Schema", () => {
  describe("Valid inputs", () => {
    it("Should validate a correct login", () => {
      const validData = {
        email: "username@mail.com",
        password: "123",
      };

      expect(() => loginSchema.parse(validData)).not.toThrow();
    });
  });

  describe("Invalid inputs", () => {
    it("Should throw error when user miss email", () => {
      const invalidData = {
        email: "",
        password: "123",
      };

      expect(() => loginSchema.parse(invalidData)).toThrow();
    });

    it("Should throw error when user miss password", () => {
      const invalidData = {
        email: "user@mail.com",
        password: "",
      };

      expect(() => loginSchema.parse(invalidData)).toThrow();
    });
  });
});

describe("Update Profile Validation Schema", () => {
  describe("valid inputs", () => {
    it("should return postive message when user update their account name", () => {
      const updateUserName = {
        username: "User123",
      };
      expect(() => updateUserProfileSchema.parse(updateUserName)).not.toThrow();
    });

    it("should return postive message when user update their email", () => {
      const updateEmail = {
        email: "u@mail.com",
      };
      expect(() => updateUserProfileSchema.parse(updateEmail)).not.toThrow();
    });

    it("should return postive message when user update their password", () => {
      const updatePassword = {
        password: "Ssfd#132",
      };
      expect(() => updateUserProfileSchema.parse(updatePassword)).not.toThrow();
    });
  });

  describe("Invalid inputs", () => {
    it("should return negative message when user update their account name with wrong data", () => {
      const updateUserName = {
        username: "u",
      };
      expect(() => updateUserProfileSchema.parse(updateUserName)).toThrow();
    });

    it("should return negative message when user update their email with wrong data", () => {
      const updateEmail = {
        email: "u",
      };
      expect(() => updateUserProfileSchema.parse(updateEmail)).toThrow();
    });

    it("should return negative message when user update their password with wrong data", () => {
      const updatePassword = {
        password: "ddddddd",
      };
      expect(() => updateUserProfileSchema.parse(updatePassword)).toThrow();
    });
  });
});
