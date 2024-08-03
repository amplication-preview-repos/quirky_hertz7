/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AttendeeWhereUniqueInput } from "../../attendee/base/AttendeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AttendeeUpdateManyWithoutTicketsInput {
  @Field(() => [AttendeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttendeeWhereUniqueInput],
  })
  connect?: Array<AttendeeWhereUniqueInput>;

  @Field(() => [AttendeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttendeeWhereUniqueInput],
  })
  disconnect?: Array<AttendeeWhereUniqueInput>;

  @Field(() => [AttendeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttendeeWhereUniqueInput],
  })
  set?: Array<AttendeeWhereUniqueInput>;
}

export { AttendeeUpdateManyWithoutTicketsInput as AttendeeUpdateManyWithoutTicketsInput };
