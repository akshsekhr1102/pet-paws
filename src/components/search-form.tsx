"use client";
import { useSearchContext } from "@/lib/hooks";
import { Input } from "./ui/input";

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();
  return (
    <form className="w-full  h-full border-black/[0.08]">
      <Input
        className="w-full h-full bg-white/20 rounded-sm focus:bg-white placeholder:text-white/50"
        placeholder="search pets"
        type="search"
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
      />
    </form>
  );
}
