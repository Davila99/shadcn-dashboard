import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <Card>
        <CardHeader>
          <Image src='https://github.com/shadch.png' alt="Shadcn" width={40} height={40} className=" rounded-full mr-2 w-10 h-10" />
        </CardHeader>
      </Card>
    </div>
  );
}