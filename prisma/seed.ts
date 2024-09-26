import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pets = [
    {
        name: "Benjamin",
        ownerName: "John Doe",
        imageUrl:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=100&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age: 2,
        notes:
            "Doesn't like to be touched on the belly. Plays well with other dogs.",
    },
    {
        name: "Richard",
        ownerName: "Josephine Dane",
        imageUrl:
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=100&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age: 5,
        notes: "Needs medication twice a day.",
    },
    {
        name: "Tom",
        ownerName: "Tommy Doe",
        imageUrl: "https://media.istockphoto.com/id/1206503308/photo/portrait-of-a-beautiful-black-labrador-over-white-background-looking-at-the-camera-pets.jpg?s=1024x1024&w=is&k=20&c=bP0lEhtcoamNVp_ztgqlU8sAD9D_8TC8qVMXBkRrdWs=",
        age: 4,
        notes: "Allergic to chicken.",
    },
    {
        name: "Raj",
        ownerName: "Khan",
        imageUrl: "https://media.istockphoto.com/id/472196945/photo/puppies-russian-toy-terrier.jpg?s=1024x1024&w=is&k=20&c=rEzcvQVSjtpmhR1XSHUXBL-VUfG4xiRmKzv2raLJBNk=",
        age: 5,
        notes: "Feed me!!"
    }
];

async function main() {
    console.log(`Start seeding ...`);

    for (const pet of pets) {
        const result = await prisma.pet.create({
            data: pet,
        });
        console.log(`Created pet with id: ${result.id}`);
    }

    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });