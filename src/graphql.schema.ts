/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class RideInput {
  toLocation: string;
  fromLocation: string;
  price: number;
  count: number;
  date: DateTime;
  userId: string;
}

export class UserCreate {
  name: string;
  lastName: string;
  email: EmailAddress;
}

export class UserUpdate {
  id: string;
  name?: Nullable<string>;
  lastName?: Nullable<string>;
  email?: Nullable<EmailAddress>;
}

export class Ride {
  id: string;
  toLocation: string;
  fromLocation: string;
  price: number;
  count: number;
  date: DateTime;
  userId: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  user?: Nullable<User>;
}

export abstract class IQuery {
  abstract rides(): Ride[] | Promise<Ride[]>;

  abstract ride(id: string): Nullable<Ride> | Promise<Nullable<Ride>>;

  abstract users(): User[] | Promise<User[]>;

  abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  abstract rideCreate(input?: Nullable<RideInput>): Ride | Promise<Ride>;

  abstract userCreate(input: UserCreate): User | Promise<User>;

  abstract userUpdate(input: UserUpdate): User | Promise<User>;

  abstract userDelete(id: string): User | Promise<User>;
}

export class User {
  id: string;
  name: string;
  lastName: string;
  email: EmailAddress;
  createdAt: DateTime;
  updatedAt: DateTime;
  rides?: Nullable<Ride[]>;
}

export type DateTime = any;
export type EmailAddress = any;
type Nullable<T> = T | null;
