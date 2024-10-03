"use client";

import { usePetContext } from "@/lib/hooks";

import Image from "next/image";
import PetButton from "./pet-button";
import { Pet } from "@prisma/client";

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col h-full w-full">
      {!selectedPet ? (
        <div className="h-full w-full">
          <EmptyView />
        </div>
      ) : (
        <>
          <TopBar pet={selectedPet} />
          <OtherInfo pet={selectedPet} />

          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

type Props = {
  pet: Pet;
};

function EmptyView() {
  return <h1>No pets to Display</h1>;
}

function TopBar({ pet }: Props) {
  const { handleCheckoutPet } = usePetContext();

  return (
    <div className="flex items-center py-2 border-b border-light  bg-white px-8">
      <Image
        src={pet!.imageUrl}
        alt={`Image of ${pet.name}`} // Meaningful alt text
        height={75}
        width={75}
        className="w-[75px] h-[75px] rounded-full object-cover"
      />
      <h2 className="text-3xl font-semibold leading-7 ml-5">{pet.name}</h2>
      <div className="ml-auto flex gap-2">
        <PetButton actionType={"edit"} />
        <PetButton
          actionType={"checkout"}
          onClick={async () => await handleCheckoutPet(pet?.id)}
        />
      </div>
    </div>
  );
}

function OtherInfo({ pet }: Props) {
  return (
    <div className="flex justify-around py-10 px-5">
      <div>
        <h3
          className="text-xl font-medium uppercase text-zinc-700
"
        >
          Owener Name
        </h3>
        <p className="mt-1 text-lg text-center text-zinc-800 ">
          {pet.ownerName}
        </p>
      </div>
      <div>
        <h3
          className="text-lg font-medium uppercase text-zinc-700
"
        >
          Age
        </h3>
        <p className="mt-1 text-lg text-center text-zinc-800 ">{pet.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: Props) {
  return (
    <section className="border border-black  flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8">
      {pet.notes}
    </section>
  );
}
