import pkg, { PrismaClient } from '@prisma/client';

declare global {
  var _prisma: PrismaClient; // eslint-disable-line
}

let prisma;
if (process.env.NODE_ENV == "development") {
  if (!global._prisma) {
    global._prisma = new PrismaClient();
  }
  prisma = global._prisma;
} else {
  const { PrismaClient: PrismaClientProd } = pkg;
  prisma = new PrismaClientProd();
}

export default prisma as PrismaClient; // type assertion for shim