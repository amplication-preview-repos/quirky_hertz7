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
import { AttendeeListRelationFilter } from "../../attendee/base/AttendeeListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumTicketStatus } from "./EnumTicketStatus";
import { TransactionListRelationFilter } from "../../transaction/base/TransactionListRelationFilter";

@InputType()
class TicketWhereInput {
  @ApiProperty({
    required: false,
    type: () => AttendeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttendeeListRelationFilter)
  @IsOptional()
  @Field(() => AttendeeListRelationFilter, {
    nullable: true,
  })
  attendees?: AttendeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  seat?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumTicketStatus,
  })
  @IsEnum(EnumTicketStatus)
  @IsOptional()
  @Field(() => EnumTicketStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => TransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionListRelationFilter)
  @IsOptional()
  @Field(() => TransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: TransactionListRelationFilter;
}

export { TicketWhereInput as TicketWhereInput };
