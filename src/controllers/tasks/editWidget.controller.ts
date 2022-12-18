import { Request, Response } from "express";
import { editWidgetsService } from "../../services/tasks/editWidget.service";

export const editWidgetsController = async (req: Request, res: Response) => {
  try {
    const data = { id: req.params.id, decoded: req.decoded };
    const body = req.body
    
    const task = await editWidgetsService(data, body);

    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
