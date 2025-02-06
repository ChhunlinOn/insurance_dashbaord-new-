import prisma from "@/lib/prisma";

export async function getTotalNumberofcompany(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT COUNT(quotation.quotation_status)
FROM public.quotation
JOIN company ON quotation.company_id = company.id
WHERE quotation.quotation_status IN ('Pending', 'Approved');`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}