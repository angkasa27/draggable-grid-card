"use client";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import { GridContainer } from "./components/GridContainer";
import { Sortable, Props as SortableProps } from "./container";

const props: Partial<SortableProps> = {
  adjustScale: true,
  Container: (props: any) => <GridContainer {...props} columns={5} />,
  strategy: rectSortingStrategy,
  wrapperStyle: () => ({
    width: 140,
    height: 140,
  }),
};

export const MainContainer = () => {
  return <Sortable {...props} />;
};
