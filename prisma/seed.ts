const { PrismaClient } = require('@prisma/client');

const { floors, rooms, desks } = require('./seed/data/placeholder-data') ; // Update the path to match your file structure

const prisma = new PrismaClient();

async function seed() {
  try {
    // Seed Floors
    for (const floor of floors) {
      await prisma.floor.create({
        data: floor,
      });
    }

    // Seed Rooms
    for (const room of rooms) {
      await prisma.room.create({
        data: room,
      });
    }

    // Seed Desks
    for (const desk of desks) {
      await prisma.desk.create({
        data: desk,
      });
    }

    console.log('Data seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
