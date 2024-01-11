# Using the Business Plan Implement Financial View Endpoint

This function was specifically created for the Develop a Business Plan Template Process. It uses the Rapid API to get all Products and Services linked to the business (from the "Products and Services" table).

From this it returns a JSON to the workflow containing sums and averages of some of the business financials.

An example JSON is below:

<div id="bkmrk-%7B-%C2%A0%C2%A0%C2%A0%C2%A0%22average_cogs%22"><div>`{`</div><div>`    "average_cogs": 35,`</div><div>`    "average_product_price": 45,`</div><div>`    "profit_per_product": 10,`</div><div>`    "average_profit_margin": 25,`</div><div>`    "annual_volume": 26200,`</div><div>`    "sum_total_revenue": 792000,`</div><div>`    "sum_total_profit": 262000`</div><div>`}`</div></div><div id="bkmrk-">  
</div><div id="bkmrk-to-implement-this-fu">To implement this function into a workflow do the following:</div>1. Create a service task and set to trigger a webhook
2. Copy the endpoint URL into the webhook url
3. Get the code from your consultant to add to the endpoint