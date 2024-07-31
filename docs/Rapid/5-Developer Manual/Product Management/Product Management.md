# Product Management
Rapid Platform is a platform for software products. These products are owned by their Product Owner. To facilitate managing Products, Rapid will provision a management site to each Product Owner.

Product Management entails several sub-objectives:
- Defining the pricing and SKUs
- Defining the live product version definition
- Tracking and reacting to changes to customer subscriptions
- Tracking subscription payments

Combining these you are able to present different products and SKUs to customers through the Sign-up experience that they can buy.

Future iterations of the product management system are intended to manage discounts and discount codes for marketing campaigns.

## What is a Product
Philosophically the word product has a wide range of meaning. Instead here we will define the physical structure of a Product.

All products start with a master site. At it's most basic level a product can be thought of a pre-built Rapid site. This master site will be 'copied' to create a new site for the customer at time of purchase. 

Within the Management site the Product item stores where the master site is located as well as a basic name, description. Products also define a support request URL that will be presented to users when site installs fail.

## What are SKUs
A single product can have multiple variations with different plans and pricing. A SKU tracks the Terms and Conditions that will be presented when a User selects an associated plan as well as the cancellation text when they shut their subscription down.

## What are Versions
A product version defines the site Schema, Pages and Data Migration plan for a given product. A version also includes a version number (we recommend following [Semantic Versioning](https://semver.org/)), as well as which SKU it is associated with. 

At time of purchase when a new customer site is installed the product definition used will draw from the most recent active version for the chosen Product/SKU. This will mean the Schema and Pages will be drawn from the Version snapshot, but data will be copied from the master site at time of install following the migration plan.

:::tip
Migration data being ported live can mean a User gets partial data if they install while you are actively working on updating that data in the master site. Clever usage of filter statements within the data migration plan (see below) can help you control this behaviour if it is undesirable.
:::

### How to upgrade a Version
Product installs will pull from the most recent active version. Always assume that a customer could purchase your product at the most inconvenient time.

Given both these facts, the safest way to roll out a new version is:
1) Create a new version item set to inactive
2) Populate the Product Schema and Page Schema files using the 'Export Product Schema' menu button
3) Add in the Migration Schema file
4) Once you're happy with the new version, set it to active
5) Mark the previous version as inactive

### Product Schema
The product schema file is the description of all the tables, columns and menus in your master site.

### Page Schema
The page schema is the description of every customised page in Explorer. Pages that have not been altered from their system default will not be included, meaning the customer site will also fall back to the system default. If the system default changes, and the customer has not modified the page, then they will automatically get the new system default.

### Migration Schema
The migration schema defines what data will be copied from the master site into the customer site. This file can be written by hand. Written in [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) syntax it defines an object where each key corresponds to the list name you want to copy items from. This key itself is an object with an optional filter key that will be applied as an OData filter expression to filter out unwanted items.

For example, a schema that copies across all Process Diagrams, Diagram Folders and Principals that are set to the 'Role' type would look like
```JSON
{
	"Principals": {
		"$filter": "type eq 'Role'"
	},
	"Process Diagram Folders": {},
	"Process Diagrams": {}
}
```

## What are Plans
When interacting with the Sign-up experience the customer will be presented with different plans to purchase. The Plans list tracks:
- The title, description, icon and visibility of the card
- The price and billing frequency
- Any enquiry form location if the price isn't listed (this will replace the price and frequency display)
- How many days grace a subscription can fall out of payment before it should be terminated
- For plans that are temporary, such as introductory discounted offers, what the fall-back plan should be once the time limit expires
- The time limit for temporary plans, measured in billing frequency units

## What are Subscriptions
When a customer signs up and purchases a plan, a new subscription item will be created associated to the plan. The subscription will be initially created in a pending state, then shifted to active once the site is successfully installed. In the case of an error during the install process, the subscription will be put into a failed state and the error will be reflected in the Activity Feed.

Subscriptions track information about what was purchased and by whom. Specifically they cover:
- Which plan, product and version was installed
- The contact that made the purchase (as a separate, deduplicated record)
- The Tenant and Site name chosen during install
- The Payer ID associated with the purchase
- When the subscription starts and ends, based on the chosen plan billing frequency

### Transactions
When a payment is made for a subscription it will create a transaction record associated to that subscription. This tracks the amount, payment status and payment ID at the time.