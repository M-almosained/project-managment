import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data()
    return columns, data

def get_columns():
    return [
        {"label": "employee_name", "fieldname": "parent", "fieldtype": "Data", "width": 200},
        {"label": " Amount", "fieldname": "amount", "fieldtype": "Float", "width": 150}
    ]

def get_data():
    return frappe.db.sql("""
        SELECT 
            employee_name AS parent, 
            amount AS amount
        FROM `tabExpenses` e
        JOIN `tabExpenses Item` ei ON ei.parent = e.name
        ORDER BY e.name ASC
    """, as_dict=True)