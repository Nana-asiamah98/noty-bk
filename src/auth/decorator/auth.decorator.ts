import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";

export const GetUser = createParamDecorator(
    (data, ctx: ExecutionContext): any => {
        const {name, preferred_username} = ctx.switchToHttp().getRequest().user;
        const {accessTokenJWT} = ctx.switchToHttp().getRequest();
        return {name ,preferred_username,accessTokenJWT}
    },
  );