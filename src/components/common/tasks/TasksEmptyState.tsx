function TasksEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <article className="w-[140px] p-4 bg-neutral-3/20 rounded-lg space-y-2 border border-neutral-3">
        <div className="flex items-center justify-between">
          <span className="bg-neutral-3 h-3 w-full rounded block"></span>
        </div>
        <span className="bg-neutral-3 h-3 w-20 rounded block"></span>
        <div className="flex items-center justify-between">
          <span className="bg-neutral-3 h-4 w-4 rounded-full block"></span>
          <span className="bg-neutral-3 h-2 w-20 rounded block"></span>
        </div>
      </article>
      <p className="text-neutral-2/40 text-sm">Results not found</p>
    </div>
  );
}

export default TasksEmptyState;
