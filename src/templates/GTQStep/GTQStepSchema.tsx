import { z } from 'zod';

export const GTQStepSchema1 = z.object({
  occasion: z.string().min(1).max(50),
  location: z.string().min(1).max(100),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().max(500),
});

export const GTQStepSchema2 = z.object({
  occasion: z.string().min(1).max(50),
  location: z.string().min(1).max(100),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().max(500),
});

export const GTQStepSchema3 = z.object({
  occasion: z.string().min(1).max(50),
  location: z.string().min(1).max(100),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().max(500),
});