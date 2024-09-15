import { UserEntity } from '~/api/generated/apiSchemas'

export const auth: UserEntity & { token: string } = {
  email: 'test@test.com',
  firstName: 'Test',
  lastName: 'User',
  customerId: 123456,
  token: '1221',
}
