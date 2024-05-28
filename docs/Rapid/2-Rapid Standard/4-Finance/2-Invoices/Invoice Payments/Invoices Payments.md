# Tracking Invoice Payments

**Invoice** items contain a **Payments** tab and datatable for tracking the payments processed against a particular invoice. Rapid's system will track the sum of these **Payments** in the *Amount Paid* subquery, and measure them against the *Amount Due*. When an invoice has been completely paid, the date of the invoice being paid will be written to the *Fully Paid Date* field on the **Invoice** item page.

![A screenshot of the three fields discussed above: "Amount Due", "Amount Paid", and "Fully Paid Date".](<Invoice Subqueries.png>)

> **Above:** The three fields on the **Invoice** page item that track payment information.

:::note[Updating Subqueries]
For these subquery fields to update properly, the browser window will require refreshing.
:::

## Adding a Payment to an Invoice

1. Open an **Invoice** [item page](</docs/Rapid/2-Rapid Standard/4-Finance/2-Invoices/Creating-editing-deleting-invoices/Creating-editing-deleting-invoices.md>)

2. Press the **Payments** tab at the top of the item page

3. Press the **New Payment**

![A screenshot of the "Payments" tab, and the "New Payment" button underneath it on the Invoices page. The New Payment button has an icon of a credit card. The screenshot is annotated with two red boxes to highlight the tab and the button.](<Invoice Payment Tab.png>)

4. Enter the relevant details for the payment.

:::note[Required Fields]
Please note that the *Date* and *Total Amount* fields are required.
:::

5. Press **+ Create** or **Create and Open**

![An example of the "New Payment" create screen. The create screen contains the following fields: "Date: Sat Jun 01 2024", "Reference: 34895720345" and "Total Amount: AU$ 200". The example is annotated with a red box to highlight the location of the "Create" and "Create and Open" buttons.](<Invoice New Payment Create.png>)

:::info[Payments]
The **Payment** item can be configured to refer to an **Invoice** or **Bill**. **Payment** items use lookup fields to link to either of these other items.
:::

When returning to the **Invoice**, the payments should be reflected in the *Amount Paid* field. The final **Payment** item that covers the **Invoice** will have its date appear in the **Fully Paid Date** field.