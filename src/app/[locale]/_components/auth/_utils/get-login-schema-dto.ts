import { z } from "zod";

export type ValidationMessages = {
  emailInvalid: string;
  emailRequired: string;
  passwordMin: string;
  passwordRequired: string;
};

export const createLoginSchema = (messages: ValidationMessages) =>
  z.object({
    email: z
      .string()
      .email({ message: messages.emailInvalid })
      .nonempty({ message: messages.emailRequired }),
    password: z
      .string()
      .min(6, { message: messages.passwordMin })
      .nonempty({ message: messages.passwordRequired }),
  });

export type LoginSchemaDto = z.infer<ReturnType<typeof createLoginSchema>>;
