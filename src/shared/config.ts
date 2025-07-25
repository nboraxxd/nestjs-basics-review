import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'
import { plainToInstance } from 'class-transformer'
import { IsNumber, IsString, validateSync } from 'class-validator'

config({
  path: '.env',
})

if (!fs.existsSync(path.resolve('.env'))) {
  console.log('.env file not found. Please create a .env file with the necessary environment variables.')
  process.exit(1)
}

class ConfigSchema {
  @IsNumber()
  PORT: number
  @IsString()
  DATABASE_URL: string
  @IsString()
  ACCESS_TOKEN_SECRET: string
  @IsString()
  ACCESS_TOKEN_EXPIRES_IN: string
  @IsString()
  REFRESH_TOKEN_SECRET: string
  @IsString()
  REFRESH_TOKEN_EXPIRES_IN: string
}

const configServer = plainToInstance(ConfigSchema, process.env, { enableImplicitConversion: true })
const errors = validateSync(configServer)

if (errors.length > 0) {
  console.error('Configuration validation failed. Please check your environment variables.')
  const formattedErrors = errors.map((err) => {
    return {
      property: err.property,
      constraints: err.constraints,
      value: err.value,
    }
  })
  throw new Error(`Validation failed: ${JSON.stringify(formattedErrors)}`)
}

const envConfig = configServer

export default envConfig
