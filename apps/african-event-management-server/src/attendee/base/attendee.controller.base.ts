/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AttendeeService } from "../attendee.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AttendeeCreateInput } from "./AttendeeCreateInput";
import { Attendee } from "./Attendee";
import { AttendeeFindManyArgs } from "./AttendeeFindManyArgs";
import { AttendeeWhereUniqueInput } from "./AttendeeWhereUniqueInput";
import { AttendeeUpdateInput } from "./AttendeeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AttendeeControllerBase {
  constructor(
    protected readonly service: AttendeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attendee })
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AttendeeCreateInput,
  })
  async createAttendee(
    @common.Body() data: AttendeeCreateInput
  ): Promise<Attendee> {
    return await this.service.createAttendee({
      data: {
        ...data,

        event: data.event
          ? {
              connect: data.event,
            }
          : undefined,

        ticket: data.ticket
          ? {
              connect: data.ticket,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,

        ticket: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Attendee] })
  @ApiNestedQuery(AttendeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attendees(@common.Req() request: Request): Promise<Attendee[]> {
    const args = plainToClass(AttendeeFindManyArgs, request.query);
    return this.service.attendees({
      ...args,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,

        ticket: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attendee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async attendee(
    @common.Param() params: AttendeeWhereUniqueInput
  ): Promise<Attendee | null> {
    const result = await this.service.attendee({
      where: params,
      select: {
        createdAt: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,

        ticket: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Attendee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AttendeeUpdateInput,
  })
  async updateAttendee(
    @common.Param() params: AttendeeWhereUniqueInput,
    @common.Body() data: AttendeeUpdateInput
  ): Promise<Attendee | null> {
    try {
      return await this.service.updateAttendee({
        where: params,
        data: {
          ...data,

          event: data.event
            ? {
                connect: data.event,
              }
            : undefined,

          ticket: data.ticket
            ? {
                connect: data.ticket,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,

          ticket: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Attendee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Attendee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAttendee(
    @common.Param() params: AttendeeWhereUniqueInput
  ): Promise<Attendee | null> {
    try {
      return await this.service.deleteAttendee({
        where: params,
        select: {
          createdAt: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,

          ticket: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
