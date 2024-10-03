// "use server"
// import prisma from "@/lib/db";
// import { PetEssentials } from "@/lib/types";
// import { sleep } from "@/lib/utils";
// import { petFormSchema } from "@/lib/validations";
// import { Pet } from "@prisma/client";
// import { revalidatePath } from "next/cache";

// export async function addPet(pet: PetEssentials) {
//     await sleep(1000);
//     const validatedPet = petFormSchema.safeParse(pet);

//     // Handle validation failure
//     if (!validatedPet.success) {
//         return {
//             message: "Invalid pet data",
//             errors: validatedPet.error.issues,
//         };
//     }

//     try {

//         await prisma.pet.create({
//             data: validatedPet.data,
//         });
//         revalidatePath('/app', 'layout');
//     } catch (error) {
//         return {
//             message: "Could not add pet.",

//         };
//     }
// }

// export async function editPet(petId: Pet['id'], newPetData: PetEssentials) {
//     try {
//         await prisma.pet.update({
//             where: {
//                 id: petId,
//             },
//             data: {
//                 name: newPetData.name,
//                 ownerName: newPetData.ownerName,
//                 imageUrl: newPetData.imageUrl,
//                 age: newPetData.age,
//                 notes: newPetData.notes,
//             },
//         });
//         revalidatePath('/app', 'layout');
//     } catch (error) {
//         console.error("Error updating pet:", error);
//         return {
//             message: "Could not update pet",

//         };
//     }
// }

// export async function deletePet(petId: Pet['id']) {
//     await sleep(1000);
//     try {
//         await prisma.pet.delete({
//             where: {
//                 id: petId,
//             },
//         });
//         revalidatePath('/app', 'layout');
//     } catch (error) {
//         return {
//             message: "Couldn't delete pet",

//         };
//     }
// }

"use server"
import prisma from "@/lib/db";
import { PetEssentials } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { petFormSchema } from "@/lib/validations";
import { Pet } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addPet(pet: PetEssentials) {
    await sleep(1000);
    const validatedPet = petFormSchema.safeParse(pet);

    // Handle validation failure
    if (!validatedPet.success) {
        return {
            message: "Invalid pet data",
            errors: validatedPet.error.issues,
        };
    }

    try {
        await prisma.pet.create({
            data: validatedPet.data,
        });
        revalidatePath('/app', 'layout');
    } catch {
        return {
            message: "Could not add pet.",
        };
    }
}

export async function editPet(petId: Pet['id'], newPetData: PetEssentials) {
    try {
        await prisma.pet.update({
            where: {
                id: petId,
            },
            data: {
                name: newPetData.name,
                ownerName: newPetData.ownerName,
                imageUrl: newPetData.imageUrl,
                age: newPetData.age,
                notes: newPetData.notes,
            },
        });
        revalidatePath('/app', 'layout');
    } catch {
        return {
            message: "Could not update pet",
        };
    }
}

export async function deletePet(petId: Pet['id']) {
    await sleep(1000);
    try {
        await prisma.pet.delete({
            where: {
                id: petId,
            },
        });
        revalidatePath('/app', 'layout');
    } catch {
        return {
            message: "Couldn't delete pet.",
        };
    }
}
