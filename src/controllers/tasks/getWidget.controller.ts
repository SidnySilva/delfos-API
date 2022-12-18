import { Request, Response } from "express";
import { getWidgetsService } from "../../services/tasks/getWidget.service";

export const getWidgetsController = async (req: Request, res: Response) => {
  try {
    const tasks = await getWidgetsService();

    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
