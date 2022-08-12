/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewUser {
  name: string;
  lastName: string;
  comment: string;
}

export class User {
  id: string;
  name: string;
  lastName: string;
  comment: string;
}

export abstract class IQuery {
  abstract users(): User[] | Promise<User[]>;

  abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  abstract userCreate(input?: Nullable<NewUser>): User | Promise<User>;
}

type Nullable<T> = T | null;
