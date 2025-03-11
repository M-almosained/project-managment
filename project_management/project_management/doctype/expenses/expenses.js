frappe.ui.form.on('Expenses', {
    refresh: function(frm) {
        console.log("Form refreshed.");
    },
    calculate_amount: function(frm) {
        let amount = 0;
        if (frm.doc.table_cgko) {
            frm.doc.table_cgko.forEach(element => {
                amount += element.amount || 0; 
            });
        }
        frm.set_value('total_expenses', amount);
    }
});

frappe.ui.form.on('Expenses Item', {
    amount: function(frm, cdt, cdn) {
        let local = locals[cdt][cdn];
        console.log("Updated amount:", local.amount);
        frm.events.calculate_amount(frm);
    },
    table_cgko_remove: function(frm) { 
        console.log("Row deleted");
        frm.events.calculate_amount(frm);
    }
});