'use server';

import prisma from "./prisma";
import {z} from 'zod'


const FormSchema = z.object({
    id: z.string(),
    userId: z.string(),
    deskId: z.string(),
    bookingStatus: z.enum(['CONFIRMED']),
    startTime: z.date(),
    endTime: z.date()
  });
  
  const CreateBooking= FormSchema.omit({ id: true });


  export async function createBooking(formData: FormData) {
    const { userId, deskId, bookingStatus, startTime, endTime} = CreateBooking.parse({
      userId: formData.get('userId'),
      deskId: formData.get('deskId'),
      bookingStatus: formData.get('bookingStatus'),
      startTime: formData.get('startTime'),
      endTime: formData.get('endTime') 
    });

    try {
        const booking = await prisma.booking.create({
          data: {
            userId,
            deskId,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            bookingStatus: 'CONFIRMED',
    
          },
        });
    
        return { booking };
      } catch (error) {
        console.error('Database Error: Failed to Create Booking', error);
        return { message: 'Database Error: Failed to Create Booking.' };
      } finally {
        await prisma.$disconnect(); // Disconnect from the Prisma client
      }
  }  

