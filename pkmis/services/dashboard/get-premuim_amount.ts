import prisma from "@/lib/prisma";

export async function getAmountofPremuim() {
  const data = await prisma.$queryRaw<{ sum_premuim: string | null }[]>`
  SELECT sum(premium_amount) as sum_premuim
  FROM public.insured_coverage
  JOIN insurance_policy_premium ON insured_coverage.insurance_policy_id = insurance_policy_premium.id`;

  if (data.length > 0) {
    return data[0].sum_premuim ? data[0].sum_premuim : "0";
  } else {
    return "0";
  }
}


// import prisma from "@/lib/prisma";

// export async function getAmountofPremuim(): Promise<string> {
//   const data = await prisma.$queryRaw<
//     { count: string }[]
//   >`
//   SELECT sum(premium_amount)
//   FROM public.insured_coverage
//   JOIN insurance_policy_premium ON insured_coverage.insurance_policy_id = insurance_policy_premium.id`;
//   console.log(data);
//   if (data.length > 0) return data[0].count;
//   else return "0";
// }