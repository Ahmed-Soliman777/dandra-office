//first import zod object
import * as z from "zod";

/**
 * @desc create validation for user registeration
 */

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
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
      "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز"
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
  password: z.string({ error: "كلمة المرور مطلوبة" }),
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
      "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز"
    )
    .min(2, {
      error:
        "لأنشاء كلمة السر يجب أن تكون حدود 2 - 25 من الحروف، مع احتواء كلمة السر لحرف Capitail و Small ورقم ورمز مميز",
    })
    .max(25, { error: "لقد تعديت الحد المسموح لأنشاء كلمة السر" })
    .optional(),
});
