"use client";

import { Pet } from "@/lib/types";
import { createContext, useState } from "react";

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | undefined;
  numberOfPets: number;
  handleCheckOutPet: (id: string) => void;
  handleAddpet: (newPet: Omit<Pet, "id">) => void;
  handleChangeSelectedPetId: (id: string) => void;
  handleEditPet: (petId: string, newPetData: Omit<Pet, "id">) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  const handleCheckOutPet = (id: string) => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  };
  const handleEditPet = (petId: string, newPetData: Omit<Pet, "id">) => {
    setPets((prev) =>
      prev.map((pet) => {
        if (pet.id === petId) {
          return { id: petId, ...newPetData };
        }
        return pet;
      })
    );
  };
  const handleAddpet = (newPet: Omit<Pet, "id">) => {
    setPets((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        ...newPet,
      },
    ]);
  };
  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        selectedPet,
        numberOfPets,
        handleCheckOutPet,
        handleAddpet,
        handleEditPet,
        handleChangeSelectedPetId,
      }}
    >
      {children}
    </PetContext.Provider>
  );
}
