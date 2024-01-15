# Creating a Financial / Fiscal Year Calendar Table - Template

The purpose this page is to provide an easy-to-use PowerBi Calendar table with date hierarchy already configured for Australian Financial and Fiscal years. This will ensure that reports that incorporate a date are consistent in the way they are handling them and reduces the work burden of having to recreate from scratch each time.

#### The calendar table is created using this DAX Query:

<div id="bkmrk-calendar-%3D-addcolumn"><div>`Calendar =`</div><div>`ADDCOLUMNS (`</div><div>`    CALENDAR ( DATE ( 2022, 7, 1 ), DATE ( 2025, 6, 30 ) ),`</div><div>`    "Day of Week Long", WEEKDAY ( [Date] ),`</div><div>`    "Day Of Week Short", FORMAT ( [Date], "ddd" ),`</div><div>`    "Day As Integer", FORMAT ( [Date], "DD" ),`</div><div>`    "Week Number", FORMAT ( WEEKNUM ( [Date] ), "DD" ),`</div><div>`    "Week Ending", "Week Ending " & WEEKNUM ( [Date] ),`</div><div>`    "Week Starting", FORMAT( [Date] - WEEKDAY([Date], 2) + 1, "dd/MM/yyyy"),`</div><div>`     "Week Starting Sortable", FORMAT( [Date] - WEEKDAY([Date], 2) + 1, "yyyy/MM/dd"),`</div><div>`    "Month As Integer", FORMAT ( [Date], "MM" ),`</div><div>`    "Month Name Short", FORMAT ( [Date], "mmm" ),`</div><div>`    "Month Name Long", FORMAT ( [Date], "mmmm" ),`</div><div>`    "Cash Flow Months", FORMAT ( [Date], "YYYY/MM" ),`</div><div>`    "Quarter", "Q" & FORMAT ( [Date], "Q" ),`</div><div>`    "Year", YEAR ( [Date] ),`</div><div>`    "Financial Year", "FY" & YEAR ( [Date] ) + IF ( MONTH ( [Date] ) >= 7, 1, 0 ),`</div><div>`      "Month by Fiscal Year",`</div><div>`        IF(`</div><div>`            MONTH([Date]) >= 7,`</div><div>`            MONTH([Date]) - 6,`</div><div>`            MONTH([Date]) + 6`</div><div>`        ),`</div><div>`    "Month Name Long By Fiscal Year", FORMAT ( [Date], "mmmm" )`</div><div>`)`</div><div>  
</div><div>Financial Year Hierarchy:  
</div></div>Below is a linked PowerBi Report that uses the above Financial Year Calendar Table. It also includes a constructed Financial Year Hierarchy. This heirachy can be added to all visuals / slicers that require sorting by financial year. The 'Week Starting', 'Month Name Long By Fiscal year', and 'Financial Year' have already been sorted so that they appear in the correct order in the visuals.  
  
'Week Starting' is sorted by 'Week Starting Sortable'  
'Month Name Long By Fiscal Year' is sorted by 'Month by Fiscal Year'  
  
[PowerBi Template Report](https://rapidplatform-my.sharepoint.com/:u:/g/personal/tristanvdb_rapidplatform_com_au/EVsIEM_LjrVAowpYX6YqjXYBv7qvIGDLAH8Z-sBaXI2l5Q?e=SKkHtl)

[  
![image-1691966770139.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-08/scaled-1680-/7JVw39rxvZvWqJ6t-image-1691966770139.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-08/7JVw39rxvZvWqJ6t-image-1691966770139.png)

##### **Related article**

[Accessing Calculated Columns and Subqueries in an SQL Query - Tables and Views: What is the difference?](https://docs.rapidplatform.com/books/powerbi/page/accessing-calculated-columns-and-subqueries-in-an-sql-query-tables-and-views-what-is-the-difference)