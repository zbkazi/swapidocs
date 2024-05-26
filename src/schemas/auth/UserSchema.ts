import {z} from "zod";


// Login email and password
export const LoginSchema = z.object({
    email: z.string().email().regex(/^\S+@\S+$/),
    password: z.string().min(6, "Password must be at least 6 characters long").max(50, "Password must be at most 50 characters long"),
})

// Signup email and password
export const SignupSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
    email: z.string().email().regex(/^\S+@\S+$/),
    password: z.string().min(6, "Password must be at least 6 characters long").max(50, "Password must be at most 50 characters long"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})


// Signup Google
export const GoogleSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
    email: z.string().email().regex(/^\S+@\S+$/),
    googleId: z.string(),
})

// Signup Facebook
export const FacebookSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50, "Name must be at most 50 characters long"),
    email: z.string().email().regex(/^\S+@\S+$/),
    facebookId: z.string(),
})