import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const getUser = createParamDecorator(
  (key: string, context: ExecutionContext) => {
    const request: Express.Request & { user?: any } = context
      .switchToHttp()
      .getRequest();
    const user = request.user;
    return key ? user?.[key] : user;
  },
);
