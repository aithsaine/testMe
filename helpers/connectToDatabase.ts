import prisma from "../prisma/client"


export const connect = async () => {

    try {
        prisma.$connect();
    } catch (error) {
        console.log(error)

    }
}