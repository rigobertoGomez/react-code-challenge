import React, { ReactNode, useState } from "react";
import { Status, Task } from "@/models";
import { ExclamationCircleIcon } from "@/components/Icons";

interface TasksColumnProps {
  status: Status;
  total: number;
  children: ReactNode;
  dragged?: Task | null;
  error?: any;
  handleDrop?: (e: any) => void;
}

function TasksColumn({
  status,
  children,
  total,
  dragged,
  error,
  handleDrop,
}: TasksColumnProps) {
  const [draggedOver, setDraggedOver] = useState(false);

  // Drag&Drop events
  const handleDragover = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedList = e?.currentTarget?.dataset.list;
    if (draggedList !== dragged?.status) {
      setDraggedOver(true);
    }
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedOver(false);
  };
  const handleDragOverCapture = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedOver(false);
  };

  return (
    <div
      className="w-[348px] h-full inline-block flex-shrink-0"
      onDrop={(e) => {
        if (handleDrop) {
          handleDrop(e);
        }
        setDraggedOver(false);
      }}
      onDragOver={(e) => handleDragover(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDragOverCapture={(e) => handleDragOverCapture(e)}
      data-list={status}
    >
      <div className="flex flex-col max-h-full h-full space-y-4">
        <div className="text-white flex-shrink-0 h-8 text-lg">
          <span className="capitalize">{status?.replaceAll("_", " ").toLocaleLowerCase()}</span>
          <span className="ml-1">({total})</span>
        </div>
        {error ? (
          <div className="flex flex-col items-center justify-center text-neutral-3 py-8">
            <ExclamationCircleIcon className="w-8 h-8" />
            <p>Something went wrong</p>
          </div>
        ) : (
          <div
            className={`flex-1 flex-grow-1 flex overflow-y-auto flex-col w-full space-y-4 pb-4 h-full ${
              draggedOver &&
              "border border-dashed bg-neutral-4/50 border-neutral-3 rounded-lg"
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default TasksColumn;
