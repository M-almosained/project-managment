// Copyright (c) 2025, k and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Employee", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on('Employee', {
    before_save: function(frm) {
        // Combine First Name and Last Name, trim extra spaces
        const firstName = frm.doc.first_name || '';
        const lastName = frm.doc.last_name || '';
        frm.set_value('full_name', `${firstName} ${lastName}`.trim());
    }
});