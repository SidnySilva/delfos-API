import AppError from "../../helpers/error.helper";
import { prisma } from "../../app";

export const deleteWidgetsService = async ({ id }: any) => {
  const widget = await prisma.widgets.findUnique({ where: { id: id } });
  
  if (widget) {
    await prisma.widgets.delete({ where: { id: id } });
    return;
  }

  if(id){
    throw new AppError("Widget not found",404)
  }
  await prisma.widgets.deleteMany();
  return;
  
};
