import prisma from "@/lib/prisma";

export async function getTotalNotParnterHF(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT count(is_partner_hf)
FROM public.health_facility
where is_partner_hf = false`;
  console.log(data);
  if (data.length > 0) return data[0].count;
  else return "0";
}