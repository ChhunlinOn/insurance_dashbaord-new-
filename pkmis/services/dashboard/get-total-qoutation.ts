import prisma from "@/lib/prisma";

export async function getTotalQuotation(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT count(id)
FROM public.quotation`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}