"use client";

import { usePetContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PetList() {
  const { pets, selectedPetId, handleChangeSelectedPetId } = usePetContext();
  const { searchQuery } = useSearchContext();

  const filterPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchQuery)
  );

  return (
    <ul className="bg-slate-300 border-black/[0.08]">
      {filterPets.map((pet) => (
        <li className="border-b" key={pet.id}>
          {" "}
          <button
            onClick={() => handleChangeSelectedPetId(pet.id)}
            className={cn(
              "flex items-center text-base h-[70px] w-full cursor-pointer px-5 gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition",
              { "bg-[#d6d6d6]": selectedPetId === pet.id }
            )}
          >
            <Image
              src={pet!.imageUrl}
              alt={`Image of ${pet.name}`} // Meaningful alt text
              height={45}
              width={45}
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
