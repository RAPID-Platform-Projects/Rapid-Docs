# Pages and Tabs

## Pages

A page is like a container. We use pages to display tables in Explorer, as well as items and their information. Pages can also be used to hold visuals such as PowerBI reports or other data visualisations.

- Pages can be edited, and their contents rearranged or changed completely
- In the context of items, a page allows us to display or edit the data inside an item as though we were viewing a web form.
- Item pages allow us to hone our focus onto just one row or item in the database and change any of the columns on that item.

![A screenshot of the item page for the fictional employee "Wanda Jones". It contains all the usual fields mentioned previously, such as: First Name, Last Name, Status, DOB, etc.](<item page.png>)

As can be seen in the example above, an item page allows us to read the data more easily that in a single row on a table. We can also edit the data on the item, and then press **Save** at the top of the page to commit the changes.

:::note[Terminology]
Note that **Columns** from the employee table are now displayed here. When displayed on a page like this, these are called **fields**.
:::

### Item Fields

Fields allow us to either view data and/or edit data in this item's columns.

The field will appear differently on a page, depending on what type of column it is representing. For example:

| Column Type | Example | Explanation of Field |
| --- | --- | --- |
| *Single Line of Text* | **First Name:** Wanda Jones | We can enter a string of text. |
| *Email* | **Personal Email:** wandajones@example.com | We can enter an email address. Rapid will check that the email address entered follows proper formatting conventions. |
| *Date Field* | **DOB:** Fri Jun 25 1982 | We can pick a date from a digital calendar that appears. |

Note that some fields cannot be edited. These fields have a grey background when viewed in the Explorer experience. In the screenshot example above, these fields cannot be edited: *Full Name*, *Age*, *Years of Service*, and *Work Anniversary*.

This is because these fields use code to determine their content, instead of a user directly changing the data. The "Full Name" field, for example, simply takes a user's *First Name* and combines it with their *Last Name*. The *Age* field takes the current year and subtracts the employee's *DOB*.

## Tabs

Tabs allow us to quickly switch between pages and to compartmentalise information so that it isn't all displayed at once. For example, the *Additional Details* tab contains postal address information, which won't be used as often as other data. Therefore, we can place it in another tab so it can still be accessed easily but it remains out-of-sight.

![A screenshot of the top of an employee item page titled "Wanda Jones". The screenshot is annotated with a red box to highlight the location and appearance of tabs. The tabs are as follows: Details, Additional Details, Activity, Files, Tasks, HR. The "Details" tab is currently selected as it is emboldened and underlined.](tabs.png)

The *Activity Tab* is another good example. It contains a timeline and version history of the employee item. This is useful for working out what changes have been made to the item. However, the *Activity Feed* and timeline take up a large amount of room and would make the *Details* page look cluttered. By moving it to its own tab, we avoid this issue.

![A screenshot of the activity feed as it appears in a tab. It has a heading that reads "Employee Timeline". There is a timeline of events with most recent events at the top and oldest events at the bottom. There is also a textbox where notes and discussions can be made.](<activity feed.png>)

## Further Reading
- You can learn more about **Pages** in the [User Manual](</docs/Rapid/User%20Manual/Explorer/Pages>)