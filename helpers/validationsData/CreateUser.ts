import { z } from "zod"

export const CreateUserValidation = z.object({
    first_name: z.string().max(20),
    last_name: z.string().max(30),
    email: z.string(),
    password: z.string(),
})