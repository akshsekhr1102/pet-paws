"use client";
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";
import { useState } from "react";
import { flushSync } from "react-dom";

type PetButtons = {
  actionType: "add" | "edit" | "checkout";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function PetButton({
  actionType,
  disabled,
  onClick,
}: PetButtons) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (actionType === "checkout") {
    return (
      <Button variant={"secondary"} onClick={onClick}>
        Checkout
      </Button>
    );
  }
  if (actionType === "add" || actionType === "edit") {
    return (
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogTrigger asChild>
          {actionType === "add" ? (
            <Button size={"icon"} className="h-14 w-14">
              <PlusIcon />
            </Button>
          ) : (
            <Button>Edit</Button>
          )}
        </DialogTrigger>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>
              {actionType === "add" ? "Add a new pet" : "Edit pet"}
            </DialogTitle>
          </DialogHeader>
          <PetForm
            actionType={actionType}
            onFormSubmission={() => {
              flushSync(() => {
                setIsFormOpen(false);
              });
            }}
          />
        </DialogContent>
      </Dialog>
    );
  }
  // if (actionType === "edit") {
  //   return (<Button>Edit</Button>);
  // }
  if (actionType === "checkout") {
    return (
      <Button disabled={disabled} onClick={onClick}>
        Checkout
      </Button>
    );
  }
}
