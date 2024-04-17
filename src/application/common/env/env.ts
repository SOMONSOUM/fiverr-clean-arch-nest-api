import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number().optional().default(3306),
  DATABASE_NAME: z.string(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().optional().default(4000),
  NODE_ENV: z.string().optional().default('dev'),
  SWAGGER_USER: z.string(),
  SWAGGER_PASSWORD: z.string(),
})

export type Env = z.infer<typeof envSchema>