
const STAGING = 'http://api-admin.medicloud.sg';
const LOCAL = 'http://localhost:3000';

// const SERVERURL = LOCAL;
const SERVERURL = STAGING;

const AUTH_LOGIN = `${SERVERURL}/login/signin`;
// company
const COMPANY_DETAILS = `${SERVERURL}/company/corporate_details`;
const COMPANY_PLAN_HEADCOUNT = `${SERVERURL}/company/add_customer_plan_head_count`;
// employee
const EMPLOYEE_DETAILS = `${SERVERURL}/company/get_employee_details`;
const EMPLOYEE_LIST = `${SERVERURL}/company/employee_lists`;
const SEARCH_EMPLOYEE_LIST = `${SERVERURL}/company/employee_lists`;
const UPDATE_BULK_CREDIT = `${SERVERURL}/company/employee_allocate_credits`;
const CAP_VISIT_LIST = `${SERVERURL}/company/getCapVisitList`;
const DOWNLOAD_EMP_DEPENDENT = `${SERVERURL}/company/downloadEmployeeDependent`;
const UPLOAD_FILE_CAP = `${SERVERURL}/company/uploadCapVisitFile`;
const UPDATE_CAP_VISIT = `${SERVERURL}/company/CapVisit`;
const LOGIN_ACCESS_ACCOUNT = `${SERVERURL}/company/settings_access_account`;
const ENROLL_EMPLOYEE_EXCEL = `${SERVERURL}/company/excel_enrollment`;
const ENROLLMENT_TEMP_EMPLOYEES = `${SERVERURL}/company/get_temp_enrollees`;
const UPDATE_TEMP_EMPLOYEES = `${SERVERURL}/company/update_employee_enrollment`;
const DELETE_TEMP_EMPLOYEES = `${SERVERURL}/company/remove_enrollee`;
const COMPANY_SPENDING_ACCOUNT_STATUS = `${SERVERURL}/company/get_spending_account_status`;
const UPDATE_TEMP_DEPENDENTS = `${SERVERURL}/company/updateDependentEnrolleeDetails`;
const ENROLL_TEMP_EMPLOYEES = `${SERVERURL}/company/finish_enroll_employee`;
const COMPANY_PACKAGE_PLAN_LIST = `${SERVERURL}/company/get_company_package_plan_lists`;
const WEB_INPUT_ADD_EMPLOYEE = `${SERVERURL}/company/create_employee_web_input_method`;
const DOWNLOAD_ECLAIM_RECEIPTS = `${SERVERURL}/company/download_company_out_of_network_receipts`;
const UPLOAD_EMPLOYEE_DEPENDENT = `${SERVERURL}/company/UploadEmployeeDependent`;
const ECLAIM_TYPE_LIST = `${SERVERURL}/company/get_e_claim_type_services`;
const CREATE_ECLAIM_TYPE = `${SERVERURL}/company/create_claim_type_service`;
const UPDATE_ECLAIM_TYPE = `${SERVERURL}/company/update_claim_type_service`;
const DELETE_ECLAIM_TYPE = `${SERVERURL}/company/remove_claim_type_service`;
const GET_ACTIVE_PLANS = `${SERVERURL}/company/getPlanLists`;
const CREATE_DEPENDENT_ACCOUNT = `${SERVERURL}/company/createDependentAccount`;
const GET_SPENDING_SETTINGS_DATA = `${SERVERURL}/company/getSpendingAccountSettings`;
const COMPANY_BUSINESS_DETAILS = `${SERVERURL}/company/companyBusinessDetails`;
const COMPANY_STATUS = `${SERVERURL}/company/companyStatus`;
const COMPANY_CONTACT = `${SERVERURL}/company/companyContact`;
const COMPANY_BENEFITS_SPECIALIST = `${SERVERURL}/company/companyBenefitsSpecialist`;
const UPLOAD_CREDIT_ALLOCATION = `${SERVERURL}/company/companyAllocateCredits`;
const FETCH_VIEW_PLAN_DATA = `${SERVERURL}/company/getCustomerActivePlanDetails`;
const UPDATE_PLAN_DEPENDENT = `${SERVERURL}/company/updateDependentPlanEdit`;
const DEPENDENT_RECORD_PAYMENT = `${SERVERURL}/company/updateDependentPlanRecordPayment`;
const UPDATE_PLAN_EMPLOYEE = `${SERVERURL}/company/updateEmployeePlanEdit`;
const EMPLOYEE_RECORD_PAYMENT = `${SERVERURL}/company/updatePlanRecordPayment`;
const UPDATE_ACCOUNT_PLAN_TYPE = `${SERVERURL}/company/updateAccountPlanType`;
const DEPENDENT_RECORD_REFUND = `${SERVERURL}/company/planDependentRefund`;
const CREATE_PLAN_EXTENSION = `${SERVERURL}/company/createPlanExtension`;
const ACTIVATE_PLAN_EXTENSION = `${SERVERURL}/company/activatePlanExtension`;
const UPDATE_EMPLOYEE_REFUND_PAYMENT = `${SERVERURL}/company/updateRecordRefundEmployee`;
const DOWNLOAD_EMPLOYEE_PLAN = `${SERVERURL}/company/viewPlanEmployee`;
const UPDATE_SPENDING_DEPOSIT = `${SERVERURL}/company/planSpendingDeposit`;
const PLAN_EXTENSION_RECORD_PAYMENT = `${SERVERURL}/company/employeePlanPayment`;
const SPENDING_DEPOSIT_RECORD_PAYMENT = `${SERVERURL}/company/spendingPayment`;
const UPDATE_EDIT_PLAN_EXTENSION = `${SERVERURL}/company/employeePlanExntension`;
const UPDATE_SPENDING_ACCOUNT_SETTINGS = `${SERVERURL}/company/updateSettingsAccount`;
const DOWNLOAD_SPENDING_DEPOSIT = `${SERVERURL}/company/planSpendingDeposit`;
const DOWNLOAD_EMPLOYEE_REFUND = `${SERVERURL}/company/employeeRefund`;
const DOWNLOAD_PLAN_EXTENSION = `${SERVERURL}/company/planExtensionInvoice`;
const DOWNLOAD_DEPENDENT_REFUND = `${SERVERURL}/company/planDependentRefundPDF`;
const UPDATE_UNPAID = `${SERVERURL}/company/markUnpaid`;
const FETCH_CREDENTIALS_DATA = `${SERVERURL}/company/credential`;
const DOWNLOAD_DEPENDENT_ACCOUNT = `${SERVERURL}/company/planDependentInvoicePDF`;
const UPDATE_CREDENTIAL = `${SERVERURL}/company/credential`;
const FETCH_SPENDING_DATA = `${SERVERURL}/company/getSpendingInvoiceLists`;
const UPDATE_SPENDING_PAYMENT = `${SERVERURL}/company/spendingPayment`;
const UPDATE_INVOICE_DATES = `${SERVERURL}/company/spendingAccount`;
const DOWNLOAD_SPENDING_STATEMENT = `${SERVERURL}/company/spendingAccount`;
const DOWNLOAD_SPENDING_TRANSACTIONS = `${SERVERURL}/company/spendingAccount`;
const DOWNLOAD_RECEIPT_EXTENSION = `${SERVERURL}/company/planExtensionInvoiceReceipt`;
const FETCH_EMPLOYEE_PLAN_RENEWAL = `${SERVERURL}/company/getPlanRenewalEmployeeDetails`;
const FETCH_DEPENDENT_PLAN_RENEWAL = `${SERVERURL}/company/getPlanRenewalDependentDetails`;

module.exports = {
	AUTH_LOGIN,
	COMPANY_DETAILS,
	EMPLOYEE_DETAILS,
	EMPLOYEE_LIST,
	SEARCH_EMPLOYEE_LIST,
	UPDATE_BULK_CREDIT,
	COMPANY_PLAN_HEADCOUNT,
	CAP_VISIT_LIST,
	DOWNLOAD_EMP_DEPENDENT,
	UPLOAD_FILE_CAP,
	UPDATE_CAP_VISIT,
	LOGIN_ACCESS_ACCOUNT,
	ENROLL_EMPLOYEE_EXCEL,
	ENROLLMENT_TEMP_EMPLOYEES,
	UPDATE_TEMP_EMPLOYEES,
	DELETE_TEMP_EMPLOYEES,
	COMPANY_SPENDING_ACCOUNT_STATUS,
	UPDATE_TEMP_DEPENDENTS,
	ENROLL_TEMP_EMPLOYEES,
	COMPANY_PACKAGE_PLAN_LIST,
	WEB_INPUT_ADD_EMPLOYEE,
	DOWNLOAD_ECLAIM_RECEIPTS,
	UPLOAD_EMPLOYEE_DEPENDENT,
	ECLAIM_TYPE_LIST,
	CREATE_ECLAIM_TYPE,
	UPDATE_ECLAIM_TYPE,
	DELETE_ECLAIM_TYPE,
	GET_ACTIVE_PLANS,
	CREATE_DEPENDENT_ACCOUNT,
	GET_SPENDING_SETTINGS_DATA,
	COMPANY_BUSINESS_DETAILS,
	COMPANY_STATUS,
	COMPANY_CONTACT,
	COMPANY_BENEFITS_SPECIALIST,
	UPLOAD_CREDIT_ALLOCATION,
	FETCH_VIEW_PLAN_DATA,
	UPDATE_PLAN_DEPENDENT,
	DEPENDENT_RECORD_PAYMENT,
	UPDATE_PLAN_EMPLOYEE,
	EMPLOYEE_RECORD_PAYMENT,
	UPDATE_ACCOUNT_PLAN_TYPE,
	DEPENDENT_RECORD_REFUND,
	CREATE_PLAN_EXTENSION,
	ACTIVATE_PLAN_EXTENSION,
	UPDATE_EMPLOYEE_REFUND_PAYMENT,
	DOWNLOAD_EMPLOYEE_PLAN,
	UPDATE_SPENDING_DEPOSIT,
	PLAN_EXTENSION_RECORD_PAYMENT,
	SPENDING_DEPOSIT_RECORD_PAYMENT,
	UPDATE_EDIT_PLAN_EXTENSION,
	UPDATE_SPENDING_ACCOUNT_SETTINGS,
	DOWNLOAD_SPENDING_DEPOSIT,
	DOWNLOAD_EMPLOYEE_REFUND,
	DOWNLOAD_PLAN_EXTENSION,
	DOWNLOAD_DEPENDENT_REFUND,
	UPDATE_UNPAID,
	FETCH_CREDENTIALS_DATA,
	DOWNLOAD_DEPENDENT_ACCOUNT,
	UPDATE_CREDENTIAL,
	FETCH_SPENDING_DATA,
	UPDATE_SPENDING_PAYMENT,
	UPDATE_INVOICE_DATES,
	DOWNLOAD_SPENDING_STATEMENT,
	DOWNLOAD_SPENDING_TRANSACTIONS,
	DOWNLOAD_RECEIPT_EXTENSION,
	FETCH_EMPLOYEE_PLAN_RENEWAL,
	FETCH_DEPENDENT_PLAN_RENEWAL,
}