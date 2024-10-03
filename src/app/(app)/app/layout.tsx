import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BgPattern from "@/components/bg-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";

import { ReactNode } from "react";
import prisma from "@/lib/db";
import { Toaster } from "@/components/ui/sonner";

export default async function layout({ children }: { children: ReactNode }) {
  const pets = await prisma.pet.findMany({});
  return (
    <>
      <BgPattern />
      <div className="max-w-[1080px]  mx-auto flex flex-col min-h-screen px-4">
        <AppHeader />
        <SearchContextProvider>
          <PetContextProvider data={pets}>{children}</PetContextProvider>
        </SearchContextProvider>
        <AppFooter />
      </div>
      <Toaster position="top-right" />
    </>
  );
}
