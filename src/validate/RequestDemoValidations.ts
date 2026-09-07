import { z } from "zod";

export const EmailSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Format Email tidak valid" }),
});

    export const PhoneNumber = z.object({
    phoneNumber: z.string().regex(/^[1-9][0-9]{6,12}$/, {
        message:
        "Nomor telepon tidak boleh diawali angka 0 dan hanya berisi angka (7-13 digit)",
    }),
    });