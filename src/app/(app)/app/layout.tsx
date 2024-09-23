import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BgPattern from "@/components/bg-pattern";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BgPattern />
      <div className="max-w-[1080px] text-white mx-auto">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
