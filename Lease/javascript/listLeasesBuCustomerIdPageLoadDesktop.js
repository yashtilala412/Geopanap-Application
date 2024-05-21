const customerId = globals.urlparams.customerId || "";

if (!customerId) {
  actions.showAlert("error", "Please Provide customerId");
  actions.switchPage("customers");
  return;
}

try {
	// fetching customer data from breadcrumb
	await actions.runQuery("getCustomerByIdFromQueryParameters");
	const data = await actions.runQuery("listLeasesByCustomerIdDesktop");
	return data;
} catch(err) {
	actions.showAlert("error", err.toString()); 
}