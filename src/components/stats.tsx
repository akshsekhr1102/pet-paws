"use client";

import { usePetContext } from "@/lib/hooks";

export default function Stats() {
  const { numberOfPets } = usePetContext();

  return (
    <section>
      <p className="text-2xl font-bold leading-6 text-center">{numberOfPets}</p>
      <p className="opacity-80 ">Current guest</p>
    </section>
  );
}
