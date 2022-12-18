import { prisma } from "../../app";

export const getWidgetsService = async () => {


  return await prisma.widgets.findMany();
};
