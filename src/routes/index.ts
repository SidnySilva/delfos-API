import { Express } from "express";
import { widgetRouter } from "./widget.routes";

const router = (app: Express) => {
  app.use("", widgetRouter);
};

export default router;