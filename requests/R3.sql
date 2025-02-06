--Request5-1 do in table quotation
select
    (SELECT COUNT(insurance_policy.id) FROM insurance_policy) AS policy_count,
    (SELECT SUM(quotation.proposed_premium) FROM quotation) AS total_premium;
--minus in psql
SELECT 
    (SELECT COUNT(employee.id) FROM public.employee) - 
    (SELECT COUNT(employee.id) 
     FROM public.employee
     JOIN insured_coverage ON insured_coverage.employee_id = employee.id
    ) AS count;

--many conditions in psql
SELECT COUNT(quotation.quotation_status)
FROM public.quotation
JOIN company ON quotation.company_id = company.id
WHERE quotation.quotation_status IN ('Pending', 'Approved'); --here    