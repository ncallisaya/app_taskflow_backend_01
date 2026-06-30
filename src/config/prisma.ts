import { PrismaClient } from '@prisma/client'; 
import { PrismaPg } from '@prisma/adapter-pg';
import pool from './database';

declare global {
  var __prisma: PrismaClient | undefined;
}

const adapter = new PrismaPg(pool);

const prisma: PrismaClient =
  global.__prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma;
}

export default prisma;