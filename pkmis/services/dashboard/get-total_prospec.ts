import prisma from "@/lib/prisma";

export async function getTotalProspec(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT 
    (SELECT COUNT(employee.id) FROM public.employee) - 
    (SELECT COUNT(employee.id) 
     FROM public.employee
     JOIN insured_coverage ON insured_coverage.employee_id = employee.id
    ) AS count;`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}