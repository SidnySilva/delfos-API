import { json } from "stream/consumers";
import { prisma } from "../../app";
import AppError from "../../helpers/error.helper";

export const createWidgetService = async (body: any) => {
  const json = { text: body.name };

  const widget = await prisma.widgets.findFirst({
    where: {
      title: {
        equals: json,
      },
    },
  });

  if (widget) {
    if (widget.series.find((el) => el["name"] === body.graphName)) {
      throw new AppError("This graph already exists", 400);
    }
    const upsertWidget = await prisma.widgets.upsert({
      where: { id: widget.id },
      update: {
        series: [...widget.series, { name: body.graphName, data: body.data }],
      },
      create: {
        series: [...widget.series, { name: body.graphName, data: body.data }],
      },
    });
    return upsertWidget;
  }

  const newWidget = await prisma.widgets.create({
    data: {
      title: { text: body.name },
      series: { name: body.graphName, data: body.data },
    },
  });

  return newWidget;
};
