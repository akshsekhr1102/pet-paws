"use client";
import { usePetContext } from "@/lib/hooks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type PetFormProps = {
  actionType: "add" | "edit";
  onFormSubmission: () => void;
};

export default function PetForm({
  actionType,
  onFormSubmission,
}: PetFormProps) {
  const { handleAddpet, selectedPet, handleEditPet } = usePetContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const Pet = {
      name: formData.get("name") as string,
      ownerName: formData.get("ownerName") as string,
      notes: formData.get("notes") as string,
      age: +(formData.get("Age") as string),
      imageUrl:
        (formData.get("ImageURl") as string) ||
        "https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png",
    };
    console.log(Pet);
    if (actionType === "add") {
      handleAddpet(Pet);
    } else if (actionType === "edit") {
      handleEditPet(selectedPet?.id as string, Pet);
    }
    onFormSubmission();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            required
            name="name"
            id="name"
            type="text"
            defaultValue={actionType === "edit" ? selectedPet?.name : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="ownerName">Owner Name</Label>
          <Input
            required
            name="ownerName"
            id="ownerName"
            type="text"
            defaultValue={actionType === "edit" ? selectedPet?.ownerName : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="ImageURl">ImageURl</Label>
          <Input
            name="ImageURl"
            id="ImageURl"
            defaultValue={actionType === "edit" ? selectedPet?.imageUrl : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="Age">Age</Label>
          <Input
            required
            name="Age"
            id="Age"
            defaultValue={actionType === "edit" ? selectedPet?.age : ""}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            required
            name="notes"
            id="notes"
            rows={3}
            defaultValue={actionType === "edit" ? selectedPet?.notes : ""}
          />
        </div>
      </div>
      <Button type="submit" className="mt-5 self-end">
        {actionType === "add" ? "Add a new pet" : "edit"}
      </Button>
    </form>
  );
}
