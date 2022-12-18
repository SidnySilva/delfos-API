import { Request, Response } from "express";
import {  deleteWidgetsService } from "../../services/tasks/deleteWidget.service";

export const deleteWidgetsController = async (req: Request, res: Response) => {
  try {
    const data = { id: req.params.id, decoded: req.decoded };

   await deleteWidgetsService(data);

    return res.status(204).json();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
