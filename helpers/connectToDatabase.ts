import prisma from '../prisma/client';

export async function connect() {
    try {
        await prisma.$connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Could not connect to the database');
    }
}
