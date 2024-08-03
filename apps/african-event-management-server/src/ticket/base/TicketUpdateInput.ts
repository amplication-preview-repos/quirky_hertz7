/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendeeUpdateManyWithoutTicketsInput } from "./AttendeeUpdateManyWithoutTicketsInput";

import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumTicketStatus } from "./EnumTicketStatus";
import { TransactionUpdateManyWithoutTicketsInput } from "./TransactionUpdateManyWithoutTicketsInput";

@InputType()
class TicketUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendeeUpdateManyWithoutTicketsInput,
  })
  @ValidateNested()
  @Type(() => AttendeeUpdateManyWithoutTicketsInput)
  @IsOptional()
  @Field(() => AttendeeUpdateManyWithoutTicketsInput, {
    nullable: true,
  })
  attendees?: AttendeeUpdateManyWithoutTicketsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  seat?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumTicketStatus,
  })
  @IsEnum(EnumTicketStatus)
  @IsOptional()
  @Field(() => EnumTicketStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutTicketsInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutTicketsInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutTicketsInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutTicketsInput;
}

export { TicketUpdateInput as TicketUpdateInput };
