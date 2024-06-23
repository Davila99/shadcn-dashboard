
import { Badge } from "@/components/ui/badge"
export default function Page() {
  return (
    <div className="flex gap-4">
     <Badge capitalize={true} variant={"default"}>Default</Badge>
     <Badge variant={ "destructive"}>destructive</Badge>
     <Badge variant={"outline"}>outline</Badge>
     <Badge variant={"secondary"}>secondary</Badge>
     <Badge  capitalize={true} variant={"info"}>info</Badge>
     <Badge capitalize={true} variant={"success"}>success</Badge>
    </div>
  );
}