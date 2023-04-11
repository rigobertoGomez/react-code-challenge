import { GridIcon, ListIcon } from "@/components/Icons";
import { Button } from "@/components/ui";
import { useTasksContext } from "@/context";

export default function SwitchButton({}) {  
  const { view, setView }: any = useTasksContext();
  return (
    <span className="isolate inline-flex rounded overflow-hidden shadow-sm -space">
      <Button variant="secondary" selected={view ==='TABLE'} onClick={() => setView('TABLE')}>
        <ListIcon className="w-4 h-4" />
      </Button>
      <Button variant="secondary" selected={view ==='GRID'} onClick={() => setView('GRID')}>
        <GridIcon className="w-5.5 h-5.5" />
      </Button>
    </span>
  );
}
