import { Exclude, Expose } from 'class-transformer'
import { IsEmail, IsString, Length } from 'class-validator'

export class LoginBodyDTO {
  @IsEmail({}, { message: 'Email không hợp lệ' })
  email: string
  @IsString({ message: 'Mật khẩu không đúng định dạng' })
  @Length(6, 20, { message: 'Mật khẩu phải từ 6 đến 20 ký tự' })
  password: string
}

export class RegisterBodyDTO extends LoginBodyDTO {
  @IsString({ message: 'Tên không hợp lệ' })
  name: string
}

export class RegisterResDTO {
  id: number
  email: string
  name: string
  @Exclude() password: string
  createdAt: Date
  updatedAt: Date

  @Expose()
  get emailName() {
    return `${this.name} <${this.email}>`
  }

  constructor(partial: Partial<RegisterBodyDTO>) {
    Object.assign(this, partial)
  }
}
