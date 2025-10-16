import { PrismaClient } from '@prisma/client';
import { membersData } from './membersData';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function seedMembers() {
    for (const member of membersData) {
        try {
            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email: member.email }
            });

            if (!existingUser) {
                await prisma.user.create({
                    data: {
                        email: member.email,
                        emailVerified: new Date(),
                        name: member.name,
                        passwordHash: await hash('password', 10),
                        image: member.image,
                        profileComplete: true,
                        member: {
                            create: {
                                dateOfBirth: new Date(member.dateOfBirth),
                                gender: member.gender,
                                name: member.name,
                                created: new Date(member.created),
                                updated: new Date(member.lastActive),
                                description: member.description,
                                city: member.city,
                                country: member.country,
                                image: member.image,
                                photos: {
                                    create: {
                                        url: member.image,
                                        isApproved: true
                                    }
                                }
                            }
                        }
                    }
                });
                console.log(`Created user: ${member.name}`);
            } else {
                console.log(`User already exists: ${member.name}`);
            }
        } catch (error) {
            if (error.code === 'P2002') {
                console.log(`User already exists: ${member.name}`);
            } else {
                console.error(`Error creating user ${member.name}:`, error);
            }
        }
    }
}

async function seedAdmin() {
    try {
        const existingAdmin = await prisma.user.findUnique({
            where: { email: 'admin@test.com' }
        });

        if (!existingAdmin) {
            await prisma.user.create({
                data: {
                    email: 'admin@test.com',
                    emailVerified: new Date(),
                    name: 'Admin',
                    passwordHash: await hash('password', 10),
                    role: 'ADMIN'
                }
            });
            console.log('Admin user created');
        } else {
            console.log('Admin user already exists');
        }
    } catch (error) {
        if (error.code === 'P2002') {
            console.log('Admin user already exists');
        } else {
            console.error('Error creating admin:', error);
        }
    }
}

async function main() {
    console.log('Starting seed...');
    await seedMembers();
    await seedAdmin();
    console.log('Seed completed successfully');
}

main().catch(e => {
    console.error('Seed failed:', e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});