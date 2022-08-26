import { MaxLength } from 'class-validator';
import { UserCreate, UserUpdate } from 'src/graphql.schema';

export class UserCreateValidation extends UserCreate {
  @MaxLength(50)
  name: string;
  @MaxLength(50)
  lastName: string;
}

export class UserUpdateValidation extends UserUpdate {
  @MaxLength(50)
  name?: string;
  @MaxLength(50)
  lastName?: string;
}
