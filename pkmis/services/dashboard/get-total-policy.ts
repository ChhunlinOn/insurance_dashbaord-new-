import prisma from "@/lib/prisma";

export async function getTotalPolicy(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT COUNT(insurance_policy.id) FROM insurance_policy`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}