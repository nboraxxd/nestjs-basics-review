import { Injectable } from '@nestjs/common'
import { compare, hash } from 'bcrypt'

const SALT_ROUNDS = 10

@Injectable()
export class HashingService {
  hash(plainText: string) {
    return hash(plainText, SALT_ROUNDS)
  }

  compare(originalValue: string, hashedValue: string) {
    return compare(originalValue, hashedValue)
  }
}
