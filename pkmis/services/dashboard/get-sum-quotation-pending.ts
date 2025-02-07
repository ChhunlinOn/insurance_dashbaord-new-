import prisma from "@/lib/prisma";

export async function getTotalSumPending(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT MAX(proposed_premium) as count
FROM public.quotation
WHERE quotation.quotation_status = 'Pending'`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}