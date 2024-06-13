# Currency

## What is a Currency input control?

A currency control allows the user of the Adaptive Document to enter a monetary figure. 

For example: Imagine you are creating a quote for a client. You want to display the amount and taxation component in the quote. In such cases a simple number field would not serve the requirement. 

![Image showing currency input](<Currency 1.png>)

:::info[Please note]  
The currency control serves the specific requirement for entering monetary figures. A number 100.50 is ambiguous when it comes to representing monetary figures. AU$ 100.50 is accurate and is distinctly different from £ 100.50. Hence, the currency control is used specifically where user inputs monetary figures.

The currency control is built over the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Adaptive%20Controls/inputs-overview/Number%20OR%20Decimal/" target="_blank">**Number control**</a>. This article will discuss only the aspects that are different from the Number control. 

Hence, to gain a comprehensive understanding of currency control, it is recommended that you refer the article on <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Adaptive%20Controls/inputs-overview/Number%20OR%20Decimal/" target="_blank">**Number control**</a> .  
:::

## What are the attributes for Currency control?

Consider the following image depicting the fields of the attributes section for currency control. Please note, there is only one field which is different from the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Adaptive%20Controls/inputs-overview/Number%20OR%20Decimal/" target="_blank">**Number control**</a>  attributes. We shall discuss the same here.

![Image showing attributes of currency input](<Currency 2.png>)


   **Prefix** - As the name suggests, this field allows you to configure which currency symbol will appear as a prefix to the amount value. 

   To set the prefix:

   1. Click on the field. This will open a dropdown list of 118 currency symbols.

   ![Image showing symbols list in currency input](<Currency 3.png>)

   2. Scroll and select the symbol of your choice. This will appear with the amount in the currency element.

  ![Image showing currency symbol prefix](<Currency 6.png>)

  :::tip[Please note]  
  You can also use the field as a search bar. Type in the keywords and the system will prune the list of symbols according to it.

  ![Image showing search bar for currency symbol list](<Currency 4.png>)
 :::  

 :::warning[Please note]  
 The keyword search is with reference to the symbol and not the currency title. For example, you cannot type Australian Dollar to get AU$. 

 ![Image showing no match for currency search keyword](<Currency 5.png>)

 :::

As indicated earlier, the rest of the behaviour of currency control is identical to the <a href="https://rapiddocs.z8.web.core.windows.net/docs/Rapid/Keyper%20Manual/Adaptive%20Designer/Adaptive%20Controls/inputs-overview/Number%20OR%20Decimal/" target="_blank">**Number control**</a>. Please visit the same for detailed explanation of each of the attributes.

