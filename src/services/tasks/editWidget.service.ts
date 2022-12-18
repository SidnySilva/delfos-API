import AppError from "../../helpers/error.helper";
import { prisma } from "../../app";

export const editWidgetsService = async ({ id }: any, data: any) => {
  const widget = await prisma.widgets.findUnique({ where: { id: id } });

  if (!widget) {
    throw new AppError("Widget not found", 404);
  }
  const newSerie = widget.series.map((el) =>
    el["name"] === data.graphName
      ? (el["data"] = { name: data.graphName, data: data.data? data.data:el['data'] })
      : el
  );

  const editedWidget = await prisma.widgets.update({
    where: { id: id },
    data: {
      title: { text: data.name ? data.name : widget.title['text'] },
      series: newSerie,
    },
  });

  return editedWidget;
};
