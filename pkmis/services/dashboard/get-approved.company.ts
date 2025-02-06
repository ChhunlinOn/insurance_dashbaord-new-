import prisma from "@/lib/prisma";

export async function getTotalApprovedCompany(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT COUNT(company_id) as count
FROM public.quotation
WHERE quotation.quotation_status = 'Approved'`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}