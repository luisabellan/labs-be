// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Express } from "express-serve-static-core";

declare module "express-serve-static-core" {
  export interface Request {
    currentUser?: import("@entities/User").IUser | undefined;
  }
}
