import prisma from "@/lib/prisma";

export async function getTotalApproved(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT COUNT(quotation_status) as count
FROM public.quotation
WHERE quotation.quotation_status = 'Approved'`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}