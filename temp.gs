// =====================================================
// NCAT 2026 SIMPLE REGISTRATION SCRIPT
// =====================================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Simple row data with just basic info
    const rowData = [
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.participationType || '',
      data.selectedCategory || '',
      data.paymentMethod || '',
      data.transactionId || '',
      data.amountPaid || '',
      data.paymentName || '',
      new Date().toLocaleString('en-PK', {timeZone: 'Asia/Karachi'})
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Registration saved!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Run this function ONCE to set up column headers
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  const headers = [
    "Full Name",
    "Email",
    "Phone Number",
    "Participation Type",
    "Selected Category",
    "Payment Method",
    "Transaction ID",
    "Amount Paid (PKR)",
    "Payment Name",
    "Registration Timestamp"
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  
  SpreadsheetApp.getActiveSpreadsheet().toast("Headers setup complete!", "Success", 3);
}