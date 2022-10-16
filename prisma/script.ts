import prisma from "./prisma";

async function main() {
  const j = await prisma.job.create({
    data: {
      url: "http://google.com",
      urlHash: "hash",
    }
  });
  console.log(j);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit();
  });