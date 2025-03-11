import frappe
from frappe.model.document import Document

class Expenses(Document):
    def validate(self):
        self.calculate_total_expenses()

    def calculate_total_expenses(self):
        total = 0
        for item in self.table_cgko:
            total += item.amount
        self.total_expenses = total