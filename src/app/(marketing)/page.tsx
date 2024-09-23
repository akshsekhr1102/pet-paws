import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-3  bg-[#5dc99c] min-h-screen  flex flex-col md:flex-row items-center justify-center gap-10">
      <Image
        src={
          "https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        }
        alt=""
        height={519}
        width={472}
        className=" hidden md:flex "
      />
      <div className=" ">
        <Logo />
        <h1 className="text-3xl md:text-5xl font-semibold my-6 max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className=" text-lg md:text-2xl font-medium max-w-[600px] text-pretty">
          Use Petsoft to easily keep track of pets under your care. Get life
          time access for $299
        </p>
        <div className="mt-10 flex gap-4">
          <Button asChild className="" variant={"secondary"}>
            <Link href={"/signup"}>Get started</Link>
          </Button>
          <Button asChild className="">
            <Link href={"/login"}>Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
