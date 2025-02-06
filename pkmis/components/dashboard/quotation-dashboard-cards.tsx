import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalQuotation } from "@/services/dashboard/get-total-qoutation";
import { getTotalAvgPremium } from "@/services/dashboard/get-avg-premuim";
import { getTotalPending } from "@/services/dashboard/get-pending-qoutation";
import { getTotalSumPending } from "@/services/dashboard/get-sum-quotation-pending";
import { getTotalApproved } from "@/services/dashboard/get-approved-qoutation";
import { getTotalApprovedCompany } from "@/services/dashboard/get-approved.company";
import { getTotalAcceptCompany } from "@/services/dashboard/get-accept-company";
import { getTotalAcceptsumCompany } from "@/services/dashboard/get-accept-company-sum";

export async function QuotationDashboardCards() {
  const totalSales = await getTotalQuotation();
  const AVG_Premium = await getTotalAvgPremium();
  const totalProducts = await getTotalPending();
  const sum_pending = await getTotalSumPending();
  const totalCustomers = await getTotalApproved();
  const company_approved = await getTotalApprovedCompany();
  const totalSuppliers = await getTotalAcceptCompany();
  const sum_accepted_company = await getTotalAcceptsumCompany();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-red-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Quotation</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSales.toString()}</div>
          <p className="text-xs text-muted-foreground">Avg. Premium: ${AVG_Premium}</p>
        </CardContent>
      </Card>
      <Card className="bg-orange-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pending Quotation
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalProducts.toString()}</div>
          <p className="text-xs text-muted-foreground">Max Premium: ${sum_pending}</p>
        </CardContent>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Approved Quotation
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalCustomers.toString()}</div>
          <p className="text-xs text-muted-foreground">Number of company: {company_approved.toString()}</p>
        </CardContent>
      </Card>
      <Card className="bg-green-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Accepted Quotation
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
            <path d="M16.5 9.4 7.55 4.24" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalSuppliers.toString()}</div>
          <p className="text-xs text-muted-foreground">Premium Amount: ${sum_accepted_company.toString()}</p>
        </CardContent>
      </Card>
    </div>
  );
}
