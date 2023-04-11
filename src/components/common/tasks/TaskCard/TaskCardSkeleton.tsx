
function TaskCardSkeleton() {
  return (
    <article className="w-[348px] h-[208px] p-4 bg-neutral-4 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <span className="bg-neutral-5/60 h-6 w-56 rounded animate-pulse block"></span>
      </div>
      <div className="flex items-center justify-between">
        <span className="bg-neutral-5/60 h-4 w-32 rounded animate-pulse block"></span>
        <span className="bg-neutral-5/60 h-8 w-20 rounded animate-pulse block"></span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="bg-neutral-5/60 h-8 w-24 rounded animate-pulse block"></span>
        <span className="bg-neutral-5/60 h-8 w-24 rounded animate-pulse block"></span>
      </div>
      <span className="bg-neutral-5/60 h-8 w-8 rounded-full animate-pulse block"></span>
    </article>
  );
}

export default TaskCardSkeleton;
