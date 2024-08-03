import { PrismaClient } from '@prisma/client'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../config";
const prisma = new PrismaClient()
async function main() {
    const hashedPassword = await bcrypt.hash("sabrina", 10);
    const user = await prisma.user.create({
        data: {
            username: "sabrinacarpenter",
            email: "sabrina@gmail.com",
            password: hashedPassword,
            full_name: "Sabrina Carpenter",
            bio: "I am working late cause I am a singer 💕💕",
            profile_picture_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4PnzC50nS6p-Amu_gSiNpAoulvk0YM0Zug&s",
            posts: {
                create: [{
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                },
                {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                }, {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                }, {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                }, {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                }, {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                }, {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                }, {
                    image_url: "https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg",
                    caption: "Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes",
                },
                ]

            },
        },


    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })