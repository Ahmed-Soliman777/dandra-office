//first import zod object
import * as z from "zod";

/**
 * @desc create validation for user registeration
 */

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
);

export const registerSchema = z.object({
  // userName is string, required, minimum legnth is 2 and max legnth is 25
  userName: z
    .string({ error: "اسم المستخدم مطلوب" })
    .min(2, { error: "مطلوب أكثر من حرفين لأنشاء اسم المستخدم" })
    .max(25, {
      error: "لقد تعديت الحد المسموح من الحروف لأنشاء اسم المستخدم",
    }),

  // email is required
  email: z.email({ error: "البريد الإلكتروني مطلوب" }),

  // password is string, required, minimum legnth is 2 and max legnth is 25
  password: z
    .string({ error: "كلمة السر مطلوبة" })
    .regex(
      passwordRegex,
      "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    )
    .min(2, {
      error:
        "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    })
    .max(25, { error: "لقد تعديت الحد المسموح لأنشاء كلمة السر" }),

  // isAdmin is boolean, default value is false
  isAdmin: z.boolean().default(false),

  // image is string, default value is ""
  image: z.string().default(""),
  // ToDo: Add re-enter password
}); // ToDo: Add refine for user password

//validation schema for user login
export const loginSchema = z.object({
  email: z.email({ error: "البريد الالكتروني مطلوب" }),
  password: z.string().min(1, "كلمة المرور مطلوبة"),
});

//validation schema for user login
export const updateUserProfileSchema = z.object({
  username: z
    .string()
    .min(2, { error: "مطلوب أكثر من حرفين لأنشاء اسم المستخدم" })
    .max(25, {
      error: "لقد تعديت الحد المسموح من الحروف لأنشاء اسم المستخدم",
    })
    .optional(),
  /****************************************** */
  email: z.email().min(2).max(100).optional(),
  /****************************************** */
  password: z
    .string()
    .regex(
      passwordRegex,
      "لأنشاء كلمة السر يجب أن تكون حدود 8 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    )
    .min(8, {
      error:
        "لأنشاء كلمة السر يجب أن تكون حدود 8 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    })
    .max(25, { error: "لقد تعديت الحد المسموح لأنشاء كلمة السر" })
    .optional(),
});

//validation schema for reset password
export const resetPasswordSchema = z.object({
  email: z.email().min(2).max(100),
  /****************************************** */
  password: z
    .string()
    .regex(
      passwordRegex,
      "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    )
    .min(2, {
      error:
        "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    })
    .max(25, { error: "لقد تعديت الحد المسموح لأنشاء كلمة السر" })
    .optional(),
});

//validation schema for adding new product
export const addNewProduct = z.object({
  productNameEn: z
    .string({ error: " الحقل مطلوب" })
    .min(1, { error: " الحقل مطلوب" }),
  productNameAr: z
    .string({ error: "الحقل مطلوب" })
    .min(1, { error: " الحقل مطلوب" }),
  price: z
    .number({ error: "الحقل مطلوب" })
    .min(0, { message: "أدخل رقم صحيح" }),
  quantity: z
    .number({ error: "الحقل مطلوب" })
    .min(0, { message: "أدخل رقم صحيح" })
    .int({ message: "أدخل رقم صحيح" }),
  categoryId: z.string({ message: "معرف الفئة غير صحيح" }),
  descriptionAr: z.string().optional(),
  descriptionEn: z.string().optional(),
  images: z.array(z.string()).optional(),
});

//validation schema for updating products
export const updateProduct = z.object({
  productNameEn: z.string().optional(),
  productNameAr: z.string().optional(),
  price: z.number().min(0, { message: "أدخل رقم صحيح" }).optional(),
  quantity: z
    .number()
    .min(0, { message: "أدخل رقم صحيح" })
    .int({ message: "أدخل رقم صحيح" })
    .optional(),
  descriptionAr: z.string().optional(),
  descriptionEn: z.string().optional(),
  images: z.array(z.string()).optional(),
  categoryId: z
    .number()
    .int()
    .positive({ message: "معرف الفئة غير صحيح" })
    .optional(),
});

//validation schema for adding new categorites
export const addCategory = z.object({
  categoryNameAr: z
    .string({ error: "الحقل مطلوب" })
    .min(1, { error: " الحقل مطلوب" }),
  categoryNameEn: z
    .string({ error: "الحقل مطلوب" })
    .min(1, { error: " الحقل مطلوب" }),
  categoryThumbnail: z.string().optional(),
});

//validation schema for updating category
export const updateCategory = z.object({
  categoryNameAr: z.string().min(1).optional(),
  categoryNameEn: z.string().min(1).optional(),
  categoryThumbnail: z.string().optional(),
});

//validation schema for adding new review
export const addReview = z.object({
  reviewInNumbers: z.number().min(0).max(5),
  productId: z
    .number({ error: "ادخل المنتج" })
    .int({ error: "من فصلك أدخل رقم صحيح" })
    .positive({ error: "من فصلك أدخل رقم صحيح" }),
});

//validation schema for updating reviews
export const updateReview = z.object({
  reviewInNumbers: z.number().min(0).max(5).optional(),
});

//validation schema for adding new comment
export const addComment = z.object({
  comment: z.string({ error: "يجب إضافة تعليق" }).min(2),
  productId: z
    .number({ error: "ادخل المنتج" })
    .int({ error: "من فصلك أدخل رقم صحيح" })
    .positive({ error: "من فصلك أدخل رقم صحيح" }),
});

//validation schema for update user's comment
export const updateComment = z.object({
  comment: z.string({ error: "يجب إضافة تعليق" }).min(2),
});

//validation schema for user favorites
export const userFavorite = z.object({
  productId: z
    .number({ error: "يجب إضافة منتج" })
    .int({ error: "منتج غير متاح" })
    .positive({ error: "منتج غير متاح" }),
});
