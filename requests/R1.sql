--add column in employee tables
ALTER TABLE employee
ADD nationality varchar(255);
--Insert data into employee
INSERT INTO public.employee(
	id, company_id, staff_id, full_name, date_of_birth, gender, phone_number, email, nationality)
	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
--set value to every row in employee
UPDATE public.employee 
SET nationality = 'Cambodia';

--condition to set birth condition and get data employee and company
SELECT e.full_name, e.gender, e.date_of_birth, c.company_name, c.contact_email, c.phone_number,
    CASE
        WHEN AGE(e.date_of_birth) < INTERVAL '18 years' THEN 'Under Age'
        WHEN AGE(e.date_of_birth) > INTERVAL '60 years' THEN 'Over Age'
        ELSE 'Within Age Range'
    END AS age_group
FROM employee e
JOIN company c ON e.company_id = c.id;