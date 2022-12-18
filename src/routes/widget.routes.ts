import { Router } from "express";
import { createWidgetController } from "../controllers/tasks/createWidget.controller";
import { deleteWidgetsController } from "../controllers/tasks/deleteWidget.controller";
import { editWidgetsController } from "../controllers/tasks/editWidget.controller";
import { getWidgetsController } from "../controllers/tasks/getWidget.controller";

export const widgetRouter = Router();

widgetRouter.get("/",  getWidgetsController);
widgetRouter.post("/create",  createWidgetController);
widgetRouter.patch("/edit/:id",  editWidgetsController);
widgetRouter.delete("/delete/:id?",  deleteWidgetsController);
