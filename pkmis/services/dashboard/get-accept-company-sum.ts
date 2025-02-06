import prisma from "@/lib/prisma";

export async function getTotalAcceptsumCompany(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT SUM(proposed_premium) as count
FROM public.quotation
WHERE quotation.quotation_status = 'Accepted'`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}