async function run() {
    const auto_data = await queries.autofillCustomerMobile.run();
     actions.setVariable("data",auto_data.data[0]);
    const auto_data1 = await queries.autofillGmailMobile.run();
    actions.setVariable("data1",auto_data1.data[0]);
    await actions.switchPage('customer-details');
  }
  run();