--insert data to quotation
INSERT INTO public.quotation(
     company_id, insurance_broker_id, date_issued, proposed_premium, sum_insured, coverage_details, quotation_status, acceptance_date)
VALUES ('5', '3', '2025-01-03', '300.00', 10000.00, 'Personal Accident Coverage (Accident, Disability, Death)', 'Pending', null);
--insert data to company 
INSERT INTO public.company(
    company_name, contact_email, phone_number, address, industry_type, license_number)
	VALUES (' 东方科技有限公司 (Dongfang Technology Co., Ltd.)', 'info@dongfangtech.com', '+86 10 1234 5678', ' 北京市朝阳区科技路10号 (10 Keji Road, Chaoyang District, Beijing)', 'Technology', 'CN12345678');
--insert data to employee

INSERT INTO public.employee(
    id, company_id, staff_id, full_name, date_of_birth, gender, phone_number, email, nationality)
VALUES 
    (84, 5, 'EMP084', '王伟 (Wang Wei)', '1985-03-15', 'Male', '+86 139 1234 5678', 'wang.wei@dongfangtech.com', 'China'),
    (85, 5, 'EMP085', '李娜 (Li Na)', '1990-07-10', 'Female', '+86 139 2345 6789', 'li.na@dongfangtech.com', 'China'),
    (86, 5, 'EMP086', '陈刚 (Chen Gang)', '1987-05-12', 'Male', '+86 139 5678 9012', 'chen.gang@dongfangtech.com', 'China'),
    (87, 5, 'EMP087', '刘洋 (Liu Yang)', '1988-11-25', 'Female', '+86 139 4567 8901', 'liu.yang@dongfangtech.com', 'China'),
    (88, 5, 'EMP088', '张强 (Zhang Qiang)', '1992-09-30', 'Male', '+86 139 3456 7890', 'zhang.qiang@dongfangtech.com', 'China');

--delete column in insured coverage
ALTER TABLE insured_coverage
DROP COLUMN date_of_birth;

--add HF data
INSERT INTO public.health_facility(
	health_facility_name, is_partner_hf, phone_number, location, email)
	VALUES ( 'Prek Phneou Health Center', false, '+855 12 847 675', 'National Road No 5, Prek Phnov Village, 12106 Phnom Penh 
', 'prekphneou@gmail.com');
--change HF phone from vachhar(20) to text
ALTER TABLE table_name
ALTER COLUMN column_name TYPE datatype;