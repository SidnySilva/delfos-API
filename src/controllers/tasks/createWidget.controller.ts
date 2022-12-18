import { Request, Response } from "express";
import { createWidgetService } from "../../services/tasks/createWidget.service";

export const createWidgetController = async (req: Request, res: Response) => {
  try {
    const data = await createWidgetService(req.body);

    return res.status(201).json(data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
