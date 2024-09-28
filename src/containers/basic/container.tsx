"use client";

import { SortableGrid } from "./sortable-grid";

const initialItems: ItemList[] = [
  { id: "1", width: 1 },
  { id: "2", width: 2 },
  { id: "3", width: 1 },
  { id: "4", width: 1 },
  { id: "5", width: 1 },
  { id: "6", width: 1 },
];

export function Container() {
  return (
    <div className="container mx-auto p-8">
      <SortableGrid initialItems={initialItems} />
    </div>
  );
}

export interface ItemList {
  id: string;
  width: 1 | 2;
}
