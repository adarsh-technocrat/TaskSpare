"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

function DocumentsPage() {
  const { user } = useUser();

  const onCreate = () => {};

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty.png" height="300" width="300" alt="Empty" className="dark:hidden" />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium py-4">Welcome to {user?.firstName}&apos;s Task Spare</h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default DocumentsPage;
