import { AttendeeCreateNestedManyWithoutUsersInput } from "./AttendeeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  attendees?: AttendeeCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
