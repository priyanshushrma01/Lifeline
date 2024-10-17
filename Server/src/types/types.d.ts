import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      createrid?: string;
      creatername?:string;
      file?:string;
      files?:File[];
    }
  }
}
