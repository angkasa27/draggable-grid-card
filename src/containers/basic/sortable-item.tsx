// components/SortableItem.tsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";
import React from "react";
import { ItemList } from "./container";

interface SortableItemProps {
  item: ItemList;
}

const ColumnVariant = cva("rounded-lg border bg-white shadow-sm cursor-move", {
  variants: {
    width: {
      1: "col-span-1 aspect-square",
      2: "col-span-2",
    },
  },
  defaultVariants: {
    width: 1,
  },
});

export const SortableItem: React.FC<SortableItemProps> = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={ColumnVariant({ width: item.width })}
      {...attributes}
      {...listeners}
    >
      Item {item.id}
    </div>
  );
};
