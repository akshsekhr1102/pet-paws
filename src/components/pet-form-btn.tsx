import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

type PetFormBtnProps = {
  actionType: "add" | "edit";
};

export default function PetFormBtn({ actionType }: PetFormBtnProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button type="submit" disabled={pending} className="mt-5 self-end">
        {actionType === "add" ? "Add a new pet" : "edit"}
      </Button>
    </div>
  );
}
