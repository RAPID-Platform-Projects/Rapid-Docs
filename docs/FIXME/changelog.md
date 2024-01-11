# Changelog

###   


> ### **1.33.0 - Rapid Platform**
> 
> ***30/11/2023***
> 
> **Feature**
> 
> Token Injection and Process Interruption
> 
> ***A simple scenario***
> 
> Imagine a sales lead nurturing process. The workflow will:  
> • Send newsletters, product updates every week to the lead  
> • Every time before sending, check the lead status  
> • If lead status = subscribed; send the material  
> • If lead status = unsubscribed; display a form to gather reason for unsubscribing and End process.
> 
> Before this release, the above case (and all similar requirements) was achieved by a combination of a Timer Intermediate Catch Event and an Exclusive gateway.
> 
> [![Img 1.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/FKaqsMDqjxk0aftx-img-1.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/FKaqsMDqjxk0aftx-img-1.png)
> 
> ***The problem with above solution***
> 
> The Timer Intermediate Catch Event can only be configured to:
> 
> • A specific point in time   
> • A duration of delay
> 
> Imagine the user who received a newsletter on a Tuesday. Upon receipt the Unsubscribe button was pressed. But the workflow will only check for the status next week. Till then the process token remains active.
> 
> ***Token injection and process interruption***
> 
> This release introduces a new type of Intermediate event – **The Signal Intermediate Catch Event**.
> 
> [![Img 2.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/bTqlILcWLCxOznaR-img-2.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/bTqlILcWLCxOznaR-img-2.png)
> 
> There are three fields which will help to configure the nature of this event:  
> 1\. **Choose a table** – select the required table from the list. This a mandatory field.  
> 2\. **Conditional Expression** – to provide the condition to be checked on a column value of the selected table. This is an optional field.  
> 3\. **Interrupting signal** – YES / NO – When turned YES, and the nature of the event becomes interrupting, else it remains non-interrupting.
> 
> As the name suggests, this event is capable of:  
> • Injecting a new token in the workflow process  
> • Interrupt the existing process (kill all existing tokens)
> 
>   
> ***What does it mean?***
> 
> The Signal Intermediate Catch Event gets triggered when:  
> 1\. an item is updated on the selected table (Default case - if the Conditional Expression is left empty)
> 
> OR
> 
> 2\. an item is updated on the selected table AND the defined condition on the relevant column value is met.
> 
> Considering our previous scenario, as soon as the lead Status turns “Unsubscribed”, this event will be triggered (if configured properly). Triggering of the event will generate a new token and the workflow will proceed forward from the subject intermediate event. Hence, token injection at the point in workflow where intermediate event is present, when the defined condition is met.
> 
> Further, if the “Interrupting Signal” field is set to YES, it means that as soon as the subject intermediate event is triggered, all the existing active tokens will be terminated. The only active token in the process will be the one injected by the intermediate event.
> 
> [![Img 3.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/uDYy7UHaJMZgkuoV-img-3.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/uDYy7UHaJMZgkuoV-img-3.png)
> 
> When the intermediate event *interrupts* the existing process, the symbol (where the token was present at the time of interruption) will turn grey as seen above.
> 
> When the intermediate event is triggered but *does not interrupt* the existing process, then all the tokens – i.e. the ones prior to triggering of intermediate event AND the one created by intermediate event trigger remain active in the process.
> 
> [![Img 4.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/QRhkZIMCKCGYP1ix-img-4.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/QRhkZIMCKCGYP1ix-img-4.png)
> 
> ***Another scenario***
> 
> Imagine a company has a five-stage procurement process:
> 
> - Stage 1 - identifying the need for a product or service
> - Stage 2 - conducting research and gathering information about potential vendors
> - Stage 3 - submitting requests for proposals or quotes
> - Stage 4 - evaluating proposals and selecting a vendor
> - Stage 5 - finalising and executing a contract
> 
> The process is sequential in nature. However, in certain situations, it may be necessary to bypass a stage in order to expedite the procurement process.
> 
> For example, if the company has a pre-existing relationship with a vendor and has already conducted extensive research on their products or services, they may choose to bypass Stage 2 and go directly to Stage 3 to request a quote or proposal.
> 
> Alternatively, if the procurement process is taking longer than expected and the need for the product or service is urgent, the company may choose to bypass Stage 3 and go directly to Stage 4 to select a vendor and negotiate a contract.
> 
> With the introduction of new **Signal Intermediate Catch Event**, the workflow diagram may appear as shown below:
> 
> [![photo_2023-11-29 12.18.49.jpeg](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/PcW9CAMoU31on1Jp-photo-2023-11-29-12-18-49.jpeg)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/PcW9CAMoU31on1Jp-photo-2023-11-29-12-18-49.jpeg)
> 
> If the intermediate event(s) are set as interrupting, then in the episode of a stage bypass, the existing token would be killed and the process will advance from the next relevant stage.
> 
> **Bug Fixes**
> 
> - Fixed feature level permissions getting confused between being on or off
> - Ensured restarting a process with an errored data association no longer fails to restart
> - User fields in Explorer will no longer mark the go-to user button as disabled
> - Fixed choice field flyouts being random sizes depending on configuration
> - Exit intent no longer tries to fire when deleting an item
> - Configuring email communication activities in Workflow will no longer fail if the Principals view is missing columns
> - Rolling back to the start of a process run will no longer drop input or signal context
> 
> **Improvements**
> 
> - Added v3 Adaptive document routing to Public Forms in preparation of release
> - Prevented unconfigured data cans from being flagged as errored
> - Process runs are now marked as completed when they have no active tokens
> - Added copy behaviour to ledger content in Explorer
> - Ensured the Delete Entity button doesn't randomly disappear

> ### **1.32.0 - Rapid Platform**
> 
> ***27/11/2023***
> 
> **Features**
> 
> **Five new features get released in this edition.**
> 
> **1. Search field for Boards component**
> 
> A search box is added to the KanBan Boards component. This can be used to search items on the Board based on provided keyword(s). The behaviour is identical to the *Search items* field already present in Data Table List.
> 
> **Benefit:** This feature is useful in filtering and finding items easily on the Board.
> 
> Please refer to the video below for illustration on how this new field can be used to search Tasks on a Board:  
>   
> <iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/Rxly3fTtIhg?si=kz0_HKky1gEnrznR" title="YouTube video player" width="750"></iframe>
> 
> **2. Set default value of User Type field to current user**
> 
> If in a Data Table, you have a User Type column, you can now set its **Default Value to the current user**. Therefore, if User 1 is creating an Item, then the default value of the User column will be User 1; if User 2 is creating an Item, then the default value will appear as User 2.
> 
> **Benefit:** This feature is particularly useful in reducing effort where the current user had to repeatedly select oneself while creating items.
> 
> The default value can be set using the following steps:
> 
> - - Navigate to Designer-&gt;Desired Table-&gt;Columns Tab-&gt;Desired User column.
>     - Goto Default Value field.
>     - Click "Assign to Me"
>     - The Value "@me" appears in the field indicating it is set to current user as default.
> 
> Please refer to the below video for illustration:  
>   
> <iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/tqebQygjw3Q?si=P_zxya2D6pu5tXhl" title="YouTube video player" width="750"></iframe>
> 
> **3. Create Item Service Task**
> 
> You can now generate items for an entity from within the Workflow. This means (for example) when this service task gets executed, it will add an item with defined field values to the Data Table.
> 
> **Benefit:** This is particularly useful in reducing effort spent on creating items by configuring User Tasks, Flows etc. The values of the field can be controlled from within the workflow.
> 
> You can pass both static values, as well as, Lodash expressions to the field.
> 
> [![image-1699511973958.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/u6s7jVNX91qSlmUI-image-1699511973958.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/u6s7jVNX91qSlmUI-image-1699511973958.png)
> 
> The UI is consistent with Data Association.
> 
> To configure Create Item Service Task:
> 
> 1. Select Create Item in Service Task
> 2. Select entity
> 3. Click +Add Field
> 4. Select desired field - the system will display all the fields from the selected entity.
> 5. Provide Value to the selected field.
> 
> Please refer to the below video for illustration:  
>   
> <iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/5lCFqC4kfIs?si=_HS0rS-emRvUoVHz" title="YouTube video player" width="750"></iframe>
> 
> **4. Timer Start Events**
> 
> A new type is unlocked for Start Events - the Timer Start Event. You can now configure Timer Start Events in Workflow to have your processes start on a regular cadence.
> 
> [![image-1699511775166.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/rHDMgbwqtFDOyL9g-image-1699511775166.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/rHDMgbwqtFDOyL9g-image-1699511775166.png)
> 
>   
> **Benefit:** This is particularly useful when you need a workflow to trigger at a specific time period. For example - an HR manager may want the appraisal cycle to trigger on 1st of March every year.
> 
> Timers are configured using the frequency picker but can also be configured with regular [cron expressions](https://crontab.cronhub.io/).
> 
> [![image-1699511805127.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/YIyZ6PdIYxSzH6Ke-image-1699511805127.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/YIyZ6PdIYxSzH6Ke-image-1699511805127.png)
> 
> **Fields for Time Start Event:** A time period can be viewed as a hierarchy of units
> 
> - Year
> - Month
> - Week
> - Day
> - Hour
> - Minute
> 
> The first field (*Every*) is used to define the frequency and the remaining lower fields are used to defined the exact point(s) on time period when the workflow should be triggered.
> 
> For example - Every Month - defines that the workflow will be triggered every month.
> 
> The lower fields are used to define on which day of the month / week - e.g. 1st of every month and every Sunday of the month.
> 
> Further going down the hierarchy of time units, you can define what time of the day - e.g. 9 :15 am
> 
> Therefore you can define the exact frequency and time when the workflow will be triggered.
> 
> Based on the value selected for the first field (*Every*) the lower fields are displayed for definition.
> 
> **Please note, if a field is not manually set, its default value is set to single unit. For example: if you have left the minute field blank, the workflow will be triggered every one minute.**
> 
> **Displaying defined information**
> 
> Based on the definition of frequency, the system will interpret and display the frequency as an English statement.
> 
> [![image-1699970375350.29.29.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/L1lckztefFSRF4Ob-image-1699970375350-29-29.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/L1lckztefFSRF4Ob-image-1699970375350-29-29.png)
> 
> Further, the system also displays a schedule for all the future runs of the workflow at the defined frequency (in batches of 5).
> 
> [![Screenshot 2023-11-14 at 19.36.16.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/SbidcP2y7WVfHSxB-screenshot-2023-11-14-at-19-36-16.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/SbidcP2y7WVfHSxB-screenshot-2023-11-14-at-19-36-16.png)
> 
> In case the set frequency is a non achievable case - For example - 31st February, then the schedule will display **N/A**.
> 
> Please refer to the below video for illustration:  
>   
> <iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/xEGekDGts0w?si=noOWB_nIrGaPD_m5" title="YouTube video player" width="750"></iframe>
> 
> **5. Trigger a specific workflow from a Menu button**
> 
> You can now configure a Menu button to trigger a desired workflow from within Command Bar of the Explorer Item. There is a new option in the "On-Click Action" dropdown for Menu. It is titled - "Workflow - Execute Process".
> 
> **Benefit** Prior to this feature, a Menu button could trigger a Workflow using the "On-Click Action" as "Raise Workflow Created Signal". A click on such a Menu button throws the Signal and **all the workflows** with relevant Trigger Start Events would get triggered with this.
> 
> The subject feature is useful, when you do not want all the workflows to get triggered rather a very specific one.
> 
> Therefore, this makes it very similar to manually pressing the "Launch" button from within the workflow, however, this time from within the Explorer.
> 
> Further, you can also pass inputs from Explorer to the subject Workflow. (discussed later as Part II)
> 
> To configure the menu button:
> 
> 1. Navigate to / create the desired Menu in Designer
> 2. Select On-Click Action as "Workflow - Execute Process"
> 3. Enter the Process Diagram ID - The process diagram id is present on the url of the process diagram.   
>       
>     For example - https://test.rapidplatform.com/rapidplatform/projects/workflow/diagrams/**91**/edit  
>       
>     In the above URL - 91 is the Process ID.
> 
> **Please note:** The workflow that you want to trigger from the Menu button triggers with any type of Start Event (normal / Signal / Timer). The Menu behaves like a manual Launch of the workflow process.
> 
> Please refer to the below video for illustration:  
>   
> <iframe allowfullscreen="allowfullscreen" frameborder="0" height="420" src="https://www.youtube.com/embed/oKvHHFbSqW4?si=rN5S7ryTx6DiwukV" title="YouTube video player" width="750"></iframe>
> 
> **PART II - This new feature also allows you to pass inputs to the Workflow from Explorer when the Menu button is clicked.**
> 
> To achieve this you need to configure the Workflow's Process Input section. [![Screenshot 2023-11-15 at 2.23.59 PM.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/D8A5FQPa6DyeIdH0-screenshot-2023-11-15-at-2-23-59-pm.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/D8A5FQPa6DyeIdH0-screenshot-2023-11-15-at-2-23-59-pm.png)
> 
> When you configure an Input field in the Process Inputs section, this enables you to provide a user input value at the time of manually triggering the Workflow from the Menu button.
> 
> **A special case:** In case you have:
> 
> - configured a Lookup type of Input field in the Process Input section, AND
> - the Lookup is on the field of the same table where you have configured the menu button, AND
> - the menu button is displayed on Item Level
> 
> Then the system will pickup the Title field value from the subject Item and pre-fill the same in the Input field. This still remains editable, if you wish to manually change the value that gets passed to the Workflow.
> 
> Please refer to the image below for illustration:
> 
> [![Screenshot 2023-11-15 at 2.45.57 PM.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/scaled-1680-/ySuiajijRxL6tvWJ-screenshot-2023-11-15-at-2-45-57-pm.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-11/ySuiajijRxL6tvWJ-screenshot-2023-11-15-at-2-45-57-pm.png)
> 
> **Bug Fixes**
> 
> - Fixed popup not closing when clicking off a task entry in explorer with an embedded file selected
> - Fixed multi-lookup and scoped-link fields failing to render correctly
> - Repairing sites no longer overrides the primary group
> - Fixed the titles not wrapping correctly when viewing the cards in the board component
> - Fixed the logo header in the task experience to match branding guidelines
> - Fixed email field not being greyed out when write permissions are turned off
> - Fixed media queries incorrectly applying at the correct screen size
> - Feature level permissions no longer apply when disabled
> - UTF8 and UTF16 characters now render correctly in public forms
> - Deleting a site no longer leaves the database intact
> - Viewing an Adaptive Documents item in explorer no longer references a non existent column
> - Loading spinner no longer aligned with the select all toggle when loading a data table
> - Loading spinner no longer spins indefinitely when creating a new site
> - Clicking on Workflow in the explorer menu no longer returns a 404 page not found error
> - Fetching a sub-type of task that already had estimated\_time value, no longer returned as an array
> - Can create and update public forms with site and task id
> - Manually triggering a process diagram with a signal start event now gives you full item results in the output
> - Lookups on Workflow execution forms now fetch lookups
> - Single embedded file component no longer adds a second file when another file is uploaded
> - Set multiple item data cans to green completed when they fetch successfully
> - Fixed the Board component not being able to fetch needed columns if the selected view was missing them
> 
> **Improvements**
> 
> - Added a confirmation modal in Workflow to prevent accidentally rolling back processes
> - Embedded files preview panel updated to current design
> - UI now maximizes the use of available screen space in page designer
> - Removed illegal characters in DocX template names
> - Adjusted the width of the Delete Entity pane
> - Added buttons to toggle "use created" for the Drive and Folder ID's when configuring a new Embedded File
> - Configuring page layouts are now displayed at a more appropriate size
> - Adaptive Designer styling now matches the new branding
> - Added search box to board component
> - Added webhook trigger type to post webhook options
> - File template configuration input fields now have added spacing
> - Can now trigger a Workflow from a menu item
> - Can now delete Embedded Files
> - Added menus page in Designer and moved all list level menus out of the menu

> ### **1.31.1 - Rapid Platform**
> 
> ***2/11/2023***
> 
> **Features**
> 
> Menu action templating
> 
> You can now use template strings in the open Hyperlink menu action, just like input field hyperlinks. We have also added three new parameters for templates to be aware of which server you are on.
> 
> <table border="1" style="border-collapse: collapse; width: 36.1478%;"><tbody><tr><td style="width: 36.6795%;">Parameter</td><td style="width: 63.6868%;">Result</td></tr><tr><td style="width: 36.6795%;">env</td><td style="width: 63.6868%;">Either 'test' or 'prod'</td></tr><tr><td style="width: 36.6795%;">tenant</td><td style="width: 63.6868%;">The current tenant</td></tr><tr><td style="width: 36.6795%;">site</td><td style="width: 63.6868%;">The current site</td></tr></tbody></table>
> 
> For example, you could create a link that goes to the correct tasks experience for the current site like so:
> 
> 
> ```HTML
> http://tasks.rapidplatform.<%= env!="prod" ?"com/_test" : "com/_prod"%>/<%=tenant%>/<%=site%>
> ```
> 
> HTML sanitise lodash function
> 
> When you have a textual input that contains HTML glyphs such as &lt;p&gt;&lt;/p&gt; or &lt;/br&gt; you can now invoke a built in lodash function to strip out these glyphs. For example, to remove the glyphs from a User Task description field would be like so:
> 
> ```C#
> <%=htmlToText(UserTask_0ak37ta.properties.description)%>
> ```
> 
> Default Embedded Files
> 
> Continuing our learnings from template files, you can now configure at the table level a default embedded file definition. These default definitions can either point at the current item (and generate a folder as required) or a statically defined target folder in SharePoint. You can find the configuration in the newly reorganized Options tab when configuring a table.
> 
> Trigger on Change
> 
> You can configure Webhooks and Workflow Signal Events to conditionally trigger when one or more columns are updated. the changed() function now returns true or false if the indicated column is different from before it was updated.
> 
> For example, you could configure a Signal Event to trigger when an Invoice is marked as Voided like so:
> 
> [![image-1698121487818.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/scaled-1680-/lm3gmCSlwjowsjGg-image-1698121487818.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/lm3gmCSlwjowsjGg-image-1698121487818.png)
> 
> Here the process will only trigger if both the status was changed, and if it was changed to 'VOIDED'.
> 
> The syntax for changed is:
> 
> ```C#
> changed('column_name')
> ```
> 
> Workflow Element Coalescing
> 
> For those of you working with multiple branching paths in Workflow that need to reference something that could have been created on one of them, you can now reference elements in lodash regardless if they have been executed.
> 
> This is best demonstrated with an example, consider this process:
> 
> [![image-1698286562357.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/scaled-1680-/ClXzMSDWnMqZNIf0-image-1698286562357.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-10/ClXzMSDWnMqZNIf0-image-1698286562357.png)
> 
> This process could optionally start from three difference causes; either manually with an input, or triggered via a create or update signal. The AllField data can now references whatever the starting item is and collapses the trigger item into a single place to easily reference throughout the document. The syntax to configure this can is;
> 
> ```Java
> <%= inputs?.all_field?.id ?? StartEvent_1?.properties?.id ?? StartEvent_0wzx24k?.properties?.id %>
> ```
> 
> Previously trying to reference StartEvent\_1 or StartEvent\_0wzx24k would throw an error as only one existed. This has been resolved.
> 
> Outside of starting situations, you can also collapse something created in a branching path for later referencing. Again a Data Can is used here but is not required. The Task can references the single letter task that was chosen (A, B or C) so that it can be reviewed in the Combine task. For completeness the syntax in the Task can is:
> 
> ```Java
> <%= inputs?.all_field?.id ?? StartEvent_1?.properties?.id ?? StartEvent_0wzx24k?.properties?.id %>
> ```
> 
> **Bug Fixes**
> 
> - Prevented tab freeze when configuring pages in Designer under certain conditions
> - Stopped Table search being case sensitive
> - Disabled and removed public forms where the task has been completed in all cases
> - Fixed UI failing to react when clearing / updating template folder configuration
> - Enabled attachments to be added via drag-n-drop regardless of file type
> - Fixed daylight savings time being regarded for Public Form submission timeout
> - Prevented page crash when closing the 'Add to form' panel in Designer on a table with &gt;30 columns
> 
> **Improvements**
> 
> - Upgraded styling on required fields in Explorer for readability
> - Improved Rich Text area styles when disabled to display as rich text instead of HTML
> - Added time to notes in the Activity feed
> - Added 401 page when navigating to experiences where the user is not allowed
> - Added collapse mode to workflow configuration panel (and stopped it popping out on click!)
> - Put back the Users' displayed email in User fields
> - Added Estimated time and On Hold status to Tasks, removed Failed status
> - Added support for principal unique ID in workflow user task configuration
> - Added default pages for Workflow Folders system list
> - Added feedback when uploading a process diagram using the new creation panel
> - Added Excel Date column when exporting data for better date consistency between locales
> - Added Multi-Lookup update/replacement support into Public Forms and API requests
> - Upgraded Tasks, Designer and the Login screens to match the new branding

> ### **1.31.0 - Rapid Platform**
> 
> ***12/10/2023***
> 
> **Features**
> 
> UI Styling Upgrade
> 
> [Rapid Platform System Upgrades](https://docs.rapidplatform.com/attachments/2)
> 
> Following the Rapid Platform branding upgrade, Explorer, Designer and Workflow have gotten a facelift. This includes a change to routes for Designer and Workflow
> 
> <table border="1" style="border-collapse: collapse; width: 49.7361%; height: 106px;"><tbody><tr><td style="width: 50.0661%;">**Previously**</td><td style="width: 50.0661%;">**Now**</td></tr><tr><td style="width: 50.0661%;">/{tenant}/{site}/Dezigna</td><td style="width: 50.0661%;">/{tenant}/{site}/Designer</td></tr><tr><td style="width: 50.0661%;">/{tenant}/{site}/Compoza</td><td style="width: 50.0661%;">/{tenant}/{site}/Workflow</td></tr></tbody></table>
> 
> Authed Forms
> 
> It is now possible to configure an authenticated public form. Configuring a form to be authed will require the user to put in a predetermined, generated password before proceeding to the form. It is possible to set auth from workflow and have a password be generated or manually. 2 new columns were added to the tasks table to allow for this.
> 
> Custom Users and Minimal Install
> 
> Principals can now be created manually.
> 
> In our continued quest to make Rapid as flexible as possible you can now install a limited version without requiring application consent. This change alters the install mechanism to not require SharePoint or Groups access. This will install a site with the creating user only. In order to enable inviting users you can now create principal records to manually create both users and groups.
> 
> When adding a new User the only required information is an email address. This will try to match the User on your active directory (if access is granted) and backfill details when available. Any user that can authenticate to your tenant that have a matching email address to a User in the site will now be able to login.
> 
> To help manage membership in cases when groups are not accessible, you can now manually add &amp; remove principals to groups using the command bar. You can view the membership using the Principals tab on a group, with a plan to build a custom membership control at a later stage.
> 
> Sites created with no application permissions will have reduced functionality, notably around files and emails.
> 
> <u>Added pipeline page control  
>   
> </u>It is now possible to add the pipeline control to a page layout in legacy designer, this will allow the connection to a choice field and will display that choice field in a tasteful way as a method of describing progress.
> 
> New fetching query parameters
> 
> With the development of Adaptive v3, additional query parameters have been added to fetch lists of items based around their link relationships. Check the [API Concepts](https://docs.rapidplatform.com/link/20#bkmrk-odata-function-refer) page for further details.
> 
> **Bug Fixes**
> 
> - Prevented page crash when configuring a Trigger a Webhook service task
> - Fixed 'Failed to Load' race condition on Explorer components when refreshing a page
> - Squashed Resize Observer error in console
> - Prevented erroneous error being reported when timers return to a deleted process run or diagram
> - Fixed conditions failing to fire in Adaptive Designer when configuring connections
> - Stopped menu actions with a form from sending the request on blur or when cancelled
> - Fixed site repairs with more than 700 principals failing to complete
> - Fixed selected items in multi-lookup fields failing to display as ticked
> - Fixed quick search on data tables failing to react after opening an item on the list
> - Saving in the Tasks experience without document storage set up no longer fails
> - Prevented command bar action buttons from sending when pressing cancel
> 
> **Improvements**
> 
> - Ensured Preform Remote Action menu items always send
> - Made the group picker optional when installing a site
> - Removed extraneous padding on new lines in multi-line text fields
> - Added route to fetch Principals based on their membership
> - Wide sweeping CSS upgrades and library updates throughout UI-React
> - Ensured page creation state is not re-rendered until after an item is fully created
> - Improved table scoped command bar actions to respect all possible configurations
> - Added Choice pipeline component
> - Upgraded cascading lookup configuration in Designer to be able to regard full query logic
> - Added Pages page in Designer to manage the pages on the site
> - Added manual override control for Prefill data configuration in Workflow user tasks
> - Styled 404 and 403 pages

> ### **1.30.14 - Folder Templates**
> 
> ***31/08/2023***
> 
> **Features**
> 
> [<u>Folder Templates</u>](https://docs.rapidplatform.com/link/209#bkmrk-item-folder-template)
> 
> Through Designer, it is possible to now configure a folder to use as a template for a particular list. If configured, when creating an item when the 'always create folder is enabled', the contents of the folder will be set on that item. For existing items, the folder will be cloned when creating a new folder for the item through the UI.
> 
> [<u>URL Parameter for universallyLinkedTo</u>](https://docs.rapidplatform.com/link/20#bkmrk-how-to-get-a-bunch-o-1)
> 
> Like the LinkedTo param, putting this in a get Items request from RAPID will return any items for the specified list that are universally link to the specified item, this will not return scoped universal links.
> 
> **Bug Fixes**
> 
> - Fixed an issue where lists cannot be deleted due to since deleted lookup fields
> - Prevented page crash on Workflow when viewing malformed sequence flows
> - Fixed files component in Public Forms failing to upload a file when within a child connection
> 
> **Improvements**
> 
> - Added a suite of Workflow Integration tests
> - Added the IN Odata query operator, using the following syntax IN(&lt;column name&gt;,&lt;value1&gt;,&lt;value2&gt;)
> - Added toggle on Perform Remote Action menu items to send a batch request instead of individuals
> - Added default filter to Adaptive Designer when selecting a document to not regard apps
> - Hide the execute diagram button if a non-executable diagram is opened
> - Improved UI for configuring cascading lookups
> - Cascading lookups now use OData filters

> ### **1.30.13 - Adaptive Bug Fixes**
> 
> ***187/08/2023***
> 
> **Bug Fixes**
> 
> - Fixed an issue where editing a prefilled multi line text field would sometimes clear
> 
> **Improvements**
> 
> - Added the ability to theme the login screen

> ### **1.30.12 - Workflow Rollback**
> 
> ***20/07/2023***
> 
> **Breaking Change - API user webhook control**
> 
> A new query parameter has been added to POST/PUT requests called webhooks. When true requests will trigger webhook events to fire, when false it will prevent them. This new parameter is assumed to be true for normal requests, but is assumed to be false for Application User requests.
> 
> All requests made by application users that require webhook events to fire will need to add webhooks=true
> 
> **Features**
> 
> <u>Rollback support in Workflow</u>
> 
> While viewing a process run in Workflow you can now select a previously executed element and revert the run back in time to there. For example, selecting a User Task will roll back the process to just prior re-creating the task. Rolling back a process will abort existing tasks and timers to help clean up.
> 
> **Bug Fixes**
> 
> - Fixed resuming unconfigured data associations erroneously failing
> - Fixed page crash when configuring some condition cases in Adaptive Designer
> - Re-enabled success toast on items in Explorer
> - Enabled the disable deletion configuration to persist through refresh
> - Refreshed page set when navigating between different Tasks sites
> - Fixed attachment records failing to refresh when navigating between different tasks in the Tasks experience
> - Improved reactivity when uploading attachments in the Tasks experience
> 
> **Improvements**
> 
> - Ensured site details (environment, tenant, site) are on menu action requests
> - Added concurrency support for resumes in workflow
> - Added Embedded File column support in data tables for Explorer
> - Improved performance on lists that contain multi-lookup fields
> - Added error message reflection to UI when service tasks fail in Workflow
> - Enforced currency formatting in data tables to be 2 decimal places

> ### **1.30.11 - SendGrid support in User Tasks**
> 
> ***6/07/2023***
> 
> **Features**
> 
> <u>User Task Communication Support</u>
> 
> You can now leverage the existing communication infrastructure in User Tasks when configuring your Workflows. This currently only supports SendGrid but will naturally extend to more communication channels as they become available.
> 
> <u>Embedded File Control</u>
> 
> Added the embedded file control to Adaptive. This allows custom pages to render an embedded file definition and allow file viewing and uploading.
> 
> **Bug Fixes**
> 
> - Fixed Adaptive Designer overview page failing to populate on refresh
> - Added more robust error handling and reporting when Data Cans run into problems
> - Fixed Embedded Files configuration being destroyed by update item menu actions
> - Fixed dependant lookup construction failing when regarding filters on base tables for sub-types
> - Updated the Due Date for tasks generated in a loop to regard now, rather than the start of the loop
> 
> **Improvements**
> 
> - Added exit intent configuration on all Explorer menu buttons
> - Added Embedded Files control to Adaptive control library
> - Added environment variables to webhooks and remote actions in Explorer

> ### **1.30.10 - Control Deletion at List Level**
> 
> ***29/06/2023***
> 
> **Features**
> 
> <u>List Deletion Configuration</u>
> 
> It is now possible to enable/disable delete buttons for a list and its items in Explorer using configuration in Designer. This feature helps prevent accidental deletions in linked contexts.
> 
> **Bug Fixes**
> 
> - Repeating sections no longer crash the page in certain prefill scenarios
> - Aliased illegal characters in view names
> - Enabled common names
> - Webhooks and signal events now fire on workflow update data association
> - Fixed cases where an entity cannot be deleted due to foreign key constraints
> 
> **Improvements**
> 
> - Added ability to copy json paths containing spaces and other characters in workflow
> - Added validation for view names
> - Command bar is now disabled when no document is selected
> - Site creation timeout increased to 5 minutes

> ### **1.30.9 - Form Submission Custom Pages**
> 
> ***15/06/2023***
> 
> **Features**
> 
> Successful Submission Form
> 
> It is now possible to configure a form or page to be shown in form service after the submission of a form. This is configured on a form level, where successful or errored submissions of the form can have a custom page shown rather than the default success/fail pages.
> 
> **Bug Fixes**
> 
> - Fixed an issue where lists fail to delete due to foreign key constraints
> - Fixed a page crash in forms service when a lookup is prefilled to null
> - Fixed a crash when typing 2 characters at once in a multi line field with a default value set
> - Fixed an issue where repeating sections will submit null when containing a default value
> 
> **Improvements**
> 
> - Priority and all other required fields will now be fetched for the tasks experience
> - Resolved an issue where an erroneous error is thrown on creation of a folder
> - It is now possible to compare 2 columns together in an OData Filter
> - When creating or updating a view with an invalid request, no longer times out but returns error
> - Inactive users will no longer attempt to have SharePoint permissions synced to

> ### **1.30.8 - Workflow Improvements**
> 
> ***01/06/2023***
> 
> **Bug Fixes**
> 
> - Fixed an issue where process runs fail to resume due to cans referencing a deleted item
> - Fixed an issue where forms fail to submit in certain repeating section cases
> 
> **Improvements**
> 
> - Updated error responses for invalid ID being updated
> - Timers resuming when it has already succeeded will no longer error

> ### **1.30.7 - Authenticated Requests**
> 
> ***18/5/2023***
> 
> **Features**
> 
> API Key Requests
> 
> With the positive feedback from last weeks Authenticated requests from Workflow Service Tasks, we have also added API key support. API Keys still are powered by RAPID Integrations on your site and can be configured in several ways depending on how your target API would prefer to receive its keys.
> 
> #### Custom Header
> 
> `CUSTOM_KEY = "X-API-KEY"`
> 
> ```Nginx
> GET / HTTP/1.1<br></br>Host: example.com<br></br>[CUSTOM_KEY]:  [Your Integration Key]
> ```
> 
> #### Basic Authentication
> 
> ```Nginx
> GET / HTTP/1.1<br></br>Host: example.com<br></br>Authorization:  Basic [Your Integration Key]
> ```
> 
> #### Query String
> 
> `CUSTOM_KEY = "apiKEY"`
> 
> ```Nginx
> GET / HTTP/1.1<br></br>Host: example.com<br></br>Params:  {<br></br>  [CUSTOM_KEY]: [Your Integration Key]<br></br>}
> ```
> 
> #### Body Parameter
> 
> `CUSTOM_KEY = "API-KEY"`
> 
> ```Nginx
> GET / HTTP/1.1<br></br>Host: example.com<br></br>Body:  {<br></br>  [CUSTOM_KEY]: [Your Integration Key]<br></br>} 
> ```
> 
> Adaptive Cascading Lookups
> 
> You can now configure cascading lookups in Adaptive documents. Cascading lookups regard another lookup on the document and once configured with a matching criteria will filter the items fetched by that criteria, just like in Explorer.
> 
> This support should be live for both Tasks and Public form.
> 
> **Bug Fixes**
> 
> - Fixed creating RAPID Integrations with a Username failing to save on first create
> 
> **Improvements**
> 
> - User Tasks in Workflow will now return their entire item profile on creation, rather than just completion

> ### **1.30.6 - Workflow Improvements**
> 
> ***11/5/2023***
> 
> **Features**
> 
> Update Associations
> 
> With the advent of Cans you can now configure the Data Association (dotted arrow) from an Activity towards a Can to set values of the associated item. This update is performed after the action is completed, so that you can capture data collected during the activity itself.
> 
> [![image-1683777706558.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-05/scaled-1680-/4wPJa9cG1uzvpQj2-image-1683777706558.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-05/4wPJa9cG1uzvpQj2-image-1683777706558.png)
> 
> Authenticated Service Tasks
> 
> Webhook service tasks can now use Basic authentication when interacting with remote APIs. This authentication is created and stored in a newly updated Rapid Integrations list. When creating a new integration the Username and Password are stored securely in Azure Key Vault and not on your site. As a consequence you will not be able to see stored passwords. Updating a Username or Password will overwrite the value in the Key Vault and thus be used by Workflow form then on.
> 
> Lookup View Whitelisting
> 
> When configuring a Lookup component in Adaptive Pages and Forms, you can now select a subset of views on the target table to present to the User. By default the All view will still be the first selected view.
> 
> **Bug Fixes**
> 
> - Fixed Default values for Choice fields in Adaptive Pages and Forms failing to load
> - Fixed long placeholder and content values of Choice fields extending out the page
> - Fixed deleted RAPID Sites persisting in cache storage
> 
> **Improvements**
> 
> - Disabled Save and Complete buttons on Tasks while saving/completing

> ### **1.30.5 - Workflow Improvements**
> 
> ***27/4/2023***
> 
> **Features**
> 
> DocX Image Support
> 
> You can now use [Images](https://docxtemplater.com/modules/image/) in the DocX Templater when filling in documents. With the {%ImageName} syntax you can insert new images, or replace existing images by setting their Alt text. Images replaced will respect the image size boundaries while also trying to respect the source image aspect ratio to prevent overflow in your documents. Small images will retain their size if they are smaller than the image they're replacing.
> 
> Images can be sourced from SharePoint, as with all files in RAPID.
> 
> Adaptive Output Support
> 
> User Tasks in workflow with an attached adaptive forms now present the items created or updated in the ledger. These can be accessed to help identify what happened. Items affected are now available on a 'context' key after the task is completed.
> 
> Prefill Type Coercion
> 
> Prefill data now parses strings. For example numbers and Boolean values will be cast to their correct type. Booleans are case sensitive, as per these examples:
> 
> - "1" &gt; 1
> - "0" &gt; 0
> - "true" &gt; true
> - "false" &gt; false
> - "TrUe" &gt; "TrUe"
> - "FaLSe" &gt; "FaLSe"
> 
> This system follows the standard [json.parse / json.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify "Docs") behaviour.
> 
> **Bug Fixes**
> 
> - Fixed duplicate universal links created from workflow
> - Fixed negative numbers in number fields changing to positive
> - Prevented page crash when list names start with numbers
> - Fixed page snapping to top when expanding a lookup in a form
> - Prevented 'Get items' service tasks without a view selected, from fetching raw items
> 
> **Improvements**
> 
> - Update styling on Delete intent modal
> - Users can now remove default repeating sections
> - Updated forms test url to point to new server

> ### **1.30.4 - Document Theming**
> 
> ***21/4/2023***
> 
> **Features**
> 
> DocX Theme Support
> 
> Word Documents support different Themes and the Fill Document service task (powered by DocX) now does as well. You can now configure custom theme colours which will be applied to the produced document. This sets the actual Word theme, so any content within can be styled. The theming interface mirrors the Theme configurator in Word itself to make it easy to map your custom themes across.
> 
> One word of warning, Word Online has different behaviour around custom themes as compared to Word running locally. We have noticed the first two theme colours (Text Light 1 and Text Dark 1) are respected by Word Online but instead set to black and white locally.
> 
> Adaptive Required Field Support
> 
> Marking fields as required in Adaptive documents will now be respected by both Public Forms and the Task Experience. Public forms with empty required fields will prevent submission of the form. Tasks can be altered and saved so that they can be pushed out or slowly filled in over time, but trying to complete a task with missing required fields will now direct the user to fill them in.
> 
> This update has no effect on Explorer.
> 
> **Bug Fixes**
> 
> - Fixed failure to save a task in the Task Experience if it did not have a document configured
> - Fixed parallel gateway merges in loop scenarios failing to wait for all the tokens before completing
> - Fixed inline refresh on the Tasks Experience failing to actually refresh with items
> - Prevented repeating sections with 0 items creating a blank item on submission
> 
> **Improvements**
> 
> - Added confirmation modal to Adaptive Designer delete button
> - Hidden universal links to notifications in Adaptive Tasks
> - Enabled item creation blacklisting on Gantt and Board components in Explorer
> - Cleaned up Tasks experience mobile style from feedback

> ### **1.30.0 - Mobile Tasks**
> 
> ***13/4/2023***
> 
> **Features**
> 
> Mobile Tasks
> 
> The Tasks experience has been upgraded with a mobile friendly style sheet. This styling change comes with improvements for buttons including a disabled state on task side menus when they are empty. As always these improvements are powered by feedback, so hearing back about how if works on your device is highly appreciated.
> 
> **Bug Fixes**
> 
> - Nailed down (finally) the last cases where prefilled lookups fail to present their display field
> - Prevented page crash when expanding the activity feed on some tasks in the Tasks experience
> - Prevented page crash when adding components to a section in Adaptive Designer with a Process Diagram context
> - Fixed workflow failing to link produced items in a process run to the triggering item on signal event processes
> - Prevented Adaptive login screen forcing cursor to end of line in the tenant/site fields
> 
> **Improvements**
> 
> - Set Tasks experience side panels to disabled when they do not contain any content
> - Enforced consistent author id when Workflow produces items
> - Raised date picker modal above all elements when interacting with it
> - Added automated repair mechanism for product owners to manage their customer sites

> ### **1.29.4 - Bulk Support**
> 
> ***30/3/2023***
> 
> **Improvements**
> 
> - Added bulk selection to the Adaptive Designer component selector
> - Added new query parameter on bulk creation to enable events to be fired
> - Enabled events to be fired in Public Forms when creating items in a repeating section
> - Moved site file caching external and enabled multiple Minilith pods
> - Lookups in Public Forms now present a more obvious search bar and load 50 items rather than 10

> ### **1.29.0 - Notification Support**
> 
> ***23/3/2023***
> 
> **Features**
> 
> Notification Lists
> 
> Notifications and Audiences have been upgraded from an internal table to full list support. This enables access to access and control of notifications via the API for the creation of 3rd party notification systems. See the Technical Documentation for requirements to produce and manage notifications.
> 
> Environment Headers
> 
> Webhooks and Service tasks sent from RAPID to external systems now will carry environment information in their headers. This allows for the creation of third party endpoints that can react differently if a request is received from Test or Production.
> 
> **Bugfixs**
> 
> - Fixed dates pulled from a Data Store using Lodash in Workflow v3 returning a JS date instead of an ISO date
> - Fixed lookups prefilled with just an ID failing to fetch the display field in Tasks
> - Enabled JSON fields on base tables to be returned on the All$ view, matching behaviour with sub tables
> 
> **Improvements**
> 
> - Enabled input limits on Adaptive Input components
> - Added Adaptive File Component support when placed in the Tasks experience
> - When searching for a component to add in the Adaptive Designer, the All view now can regard a list context
> - Added multi-select to the component adding panel in Adaptive Designer
> - Added improved error messaging when trying to submit a public form that had been removed from a local store

> ### **1.28.4 - Data Cans**
> 
> ***16/3/2023***
> 
> **Features**
> 
> Data Cans
> 
> It is now possible to add data cans to workflow diagrams. These act as persistent get item or get items service task, where you can reference them and fetch the most upto date state of the item(s)
> 
> Error Boundary Event
> 
> There is now support for the error boundary event, if the attached activity gets into an errored state, the boundary path will be taken.
> 
> **Bugfixs**
> 
> - Fixed the Multi Line text control in tasks and anonymous forms
> - Removing a condition no longer drops the whole array of conditions
> - Fixed a page crash on editing form state in Designer
> 
> **Improvements**
> 
> - Added support for double clicking webhook service tasks opening the run information URL
> - Theme.css file is now loaded into Designer

> ### **1.28.2 - Adaptive Cleanup**
> 
> ***9/3/2023***
> 
> **Bugfixs**
> 
> - Fixed create pages configured in Tasks failing to render for sub-types of tasks
> - Fixed the configuration panel in Adaptive Designer showing an empty configuration when opened
> - Prevented a page crash when viewing embedded files in the Tasks experience

> ### **1.28.1 - Styling and Cleanup**
> 
> ***2/3/2023***
> 
> **Features**
> 
> DocX PDF Support
> 
> You can now generate a PDF from the DocX service task. When creating a PDF file the original word file will still be produced. When referencing the embedded files configuration of the DocX service task in Workflow with PDF selected, the PDF file will be returned instead.
> 
> Additionally there is now a toggle to preserve the {moustache glyphs} within your documents when running the service task. By default these glyphs will now be replaced with a blank character.
> 
> **Bugfixs**
> 
> - Fixed a page crash when navigating between the login page and task list in the Tasks Experience
> - Fixed conditions in repeating sections failing to evaluate
> - Fixed subtypes of items linked via lookup failing to be fetched in linked scenarios
> 
> **Improvements**
> 
> - Repeating sections in Adaptive now fetch all fields contained within them, including multi-line text fields
> - Added Theme.css file support to the Tasks experience
> - Added search when using @mentions in the Activity Feed for sites with more than 250 users
> - Added click-through support between Explorer and Workflow when opening process runs inside call activity scopes
> - Added new custom rich text editor to Adapative, replacing the Multi-Line Text Control

> ### **1.27.28 - Tasks &amp; Workflow v3**
> 
> ***27/02/2023***
> 
> This release contains a one-two punch of the brand new Tasks experience as well as the shiny new Workflow v3 engine.
> 
> **Features**
> 
> Tasks Experience
> 
> Leveraging the Adaptive Documents design, the new [Tasks experience](https://tasks.rapidplatform.com/) brings the associated document front and centre.
> 
> This also comes with a new connection type to configure your Adaptive Documents, the 'Expected Context' connection. Expected Contexts allow you to define which item type (or sub-type) you are expecting to be present when opening the task. With this you can define how items that are created and updated via an Adaptive document relate to the task, if at all!
> 
> Workflow v3
> 
> Workflows' engine has been replaced with a brand new version built from scratch. Faster, more powerful and much more extensible; Workflow 3 unlocks finally implementing more of the BPMN 2.0 specification. One of the most drastic changes comes in the form of Call Activities and their child process runs. To be more in accordance with the BPMN 2.0 specification, and to support future Data Cans and Documents, sub-processes are now incorporated in their parent ledger.
> 
> While this engine upgrade is mostly future facing, it does come with some spicy new improvements right now
> 
> Custom Post Bodies
> 
> You can now configure custom post bodies in Webhook service tasks. Now you can simplify getting the data you want out of your process by using powerful Lodash expressions. Blank configurations will continue to post the entire ledger, so existing diagrams will not be affected.
> 
> [![image-1675672801035.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-02/scaled-1680-/JpcR0qEnY88DLaqH-image-1675672801035.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-02/JpcR0qEnY88DLaqH-image-1675672801035.png)
> 
> Non-Interrupting Timers
> 
> Configuring a Timer to be non-interrupting allows the creation of follow-up and checking branches in your process, without disrupting mission critical tasks.
> 
> [![image-1675673069610.png](https://docs.rapidplatform.com/uploads/images/gallery/2023-02/scaled-1680-/1ACSc8EfzJiyyXo6-image-1675673069610.png)](https://docs.rapidplatform.com/uploads/images/gallery/2023-02/1ACSc8EfzJiyyXo6-image-1675673069610.png)
> 
> **Improvements**
> 
> - Added spinner to RP Forms when loading the framework
> - Added multi-lookup field support to Adaptive Documents
> - Removed erroneous .toString when processing id values via the SDK
> - Implemented sub-process navigation to Explorer and Workflow UI
> 
> **Bug Fixes**
> 
> - Fixed Context Missing error when trying to create columns called 'Title' on new tables
> - Fixed missing clear value buttons on User and Date fields in Adaptive Documents
> - Prevented root level crash when adding Time Picker component to a page
> - Fixed custom create pages in Adaptive Documents with lookups rendering behind the creation modal
> - Fixed configuration components failing to render on the File component

> ### **1.26.7 - Adaptive Documents**
> 
> ***27/11/2022***
> 
> This release replaces Adaptive Forms with the more flexible Adaptive Documents. Documents are powerful way to store and track deep data in a single, transmittable form. This change paves the way for Adaptive Apps to develop custom experiences.
> 
> As a consequence of this change, Adaptive Designer has been upgraded to support Documents. Additionally this release will include a database upgrade to shift all existing forms into documents.
> 
> **Features**
> 
> Adaptive Designer v3
> 
> Designer has undergone significant changes supporting documents. You can now open multiple documents at the same time to make switching between them easier.
> 
> [![image-1669077016765.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-11/scaled-1680-/Y0Pzl3yHALtpdcJ6-image-1669077016765.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-11/Y0Pzl3yHALtpdcJ6-image-1669077016765.png)
> 
> Tab support has also been added to help spread configuration out so you can focus on what you're trying to do.
> 
> [![image-1669077148713.png](https://docs.rapidplatform.com/uploads/images/gallery/2022-11/scaled-1680-/hn5sanqfi9uVVNRy-image-1669077148713.png)](https://docs.rapidplatform.com/uploads/images/gallery/2022-11/hn5sanqfi9uVVNRy-image-1669077148713.png)
> 
> **Improvements**
> 
> - Simplified Universal Link schema to reduce on-disk storage by around 20%
> - Added Adaptive Documents system list, replacing Adaptive Forms
> - Associated existing public form tasks to Adaptive Documents
> - Associated existing process diagrams to Adaptive Documents
> - Implemented Adaptive Document configuration support into Workflow
> 
> **Bug Fixes**
> 
> - Fixed malformed item profile response shape when selecting sys\_type\_id

> ### **1.25.15 - Link Performance**
> 
> ***3/11/2022***
> 
> **Improvements**
> 
> - Updated Universal Link handling in Explorer to be more performant on items with many (200+) universal links
> - Cloning Process Diagrams and Adaptive Forms now will clone the XML and JSON data within

> ### **1.25.14 - API Updates**
> 
> ***6/10/2022***
> 
> **New Feature - Default configuration for Date columns on lists**
> 
> You can now configure a date column in Designer to have a default value. This value is configured as a combination of a relative date plus an offset. For example, Task Start Dates now default to Today, while their Due Date now default to Today +1 (aka: Tommorrow).
> 
> The list of relative dates to use mirror the configuration for Views and are
> 
> - today
> - tomorrow
> - startOfWeek
> - endOfWeek
> - startOfMonth
> - endOfMonth
> - startOfQuarter
> - endOfQuarter
> 
> As always at RAPID we are looking for feedback on which relative dates you would find useful.
> 
> **Improvements**
> 
> - Added $top and $skip independent query parameter support to Omnichannel when fetching a calendarView, previously both keys were required to be processed
> - \*Added scroll to connections panel in Adaptive Designer for tables with more than 30 columns
> - \*The Get Items service task now regards the selected view, instead of defaulting to the All$ view
> 
> **Bug Fixes**
> 
> - Fixed itemFilter configuration failing to be regarded in public forms for child repeating sections
> - \*Fixed Prefill data for root level single item contexts being nested under \_data.\_data
> - \*Removed dead Workflow v2 API routes
> - \*Removed dead Workflow v2 test plan routes and UI

> ### **1.25.13 - Adaptive Framework Polish**
> 
> ***27/09/2022***
> 
> **Bug Fixes**
> 
> - Fixed prefill data failing to bind in repeating sections

> ### **1.25.12 - Adaptive Framework Polish**
> 
> ***15/09/2022***
> 
> **Improvements**
> 
> - Added trashcan button when configuring DocX service tasks in Workflow that clears all form keys (including hidden ones)
> - Implemented Multi-Lookup per-fill data support in Public Forms and the Adaptive Designer
> - Prevented proxied endpoints that contain HTTP Verbs in their url from being truncated in the SDK
> 
> **Bug Fixes**
> 
> - Fixed hyperlinks failing to save their target in Static Text controls for the Adaptive Designer
> - Prevented data visually bleeding between workflow elements of the same type under certain circumstances
> - Stopped labels of hidden fields showing

> ### **1.25.11 - Time Slot Component**
> 
> ***8/09/2022***
> 
> **Features**
> 
> - Added the Time Slot component to the Adaptive Designer. This component can be configured to an Exchange inbox to allow users to select a date range (aka : time slot) from available times on that calendar.
> 
> **Improvements**
> 
> - Added secure attributes to Framework to give control over protected data in public scenarios
> - Implemented connection binding controls for components that produce more than one scalar value
> - Updated Framework typings into data-model
> - Expanded connection support to handle multiple child connection paths
> 
> **Bug Fixes**
> 
> - Fixed updating items via public forms failing to submit
> - General fixes to components and adaptive controls
> - Fixed email inputs crashing on mount under certain circumstances
> - Fixed number inputs in embedded forms eating decimal places

> ### **1.25.6 - Hotfix 1**
> 
> ***22/08/2022***
> 
> <p class="callout warning">1.25.6 caused a regression that resulted in the site file becoming immutable in rare circumstances. This resulted in the inability to do many common actions </p>
> 
> **Bug Fixes**
> 
> - Fixed an issue where the site file becomes 'locked'

> ### **1.25.6 - Minilith Performance**
> 
> ***18/08/2022***
> 
> **Bug Fixes**
> 
> - Fixed an issue where bulk creating items sometimes caused server instability

> ### **1.25.5 - Workflow Usability**
> 
> ***11/08/2022***
> 
> **Bug Fixes**
> 
> - Fixed an issue where configuring embedded forms in workflow would return an error

> ### **1.25.4 - Adaptive Scheduler**
> 
> ***28/07/2022***
> 
> <p class="callout info">**Site Repair Required**</p>
> 
> **Added the scheduler Control**
> 
> Adds the [DHX scheduler](https://docs.dhtmlx.com/scheduler/) to Adaptive Designer. Currently this control is in preview mode and was built specifically around providing a booking system. There are more generic uses for this control and these will be more explicitly supported as time goes on.
> 
> **Bug Fixes**
> 
> - Fixed an issue where the sharepoint permission call can fail in certain cases
> - Fixed an issue where a timeout occurs on save when all permissions are cleared from an item
> 
> **UI/UX Fixes**
> 
> - Added the ability to set number of default sections in a repeating section
> - Added the ability to configure multilookup parent connections

> ### **1.25.3 - Saving Minor Fix**
> 
> ***28/07/2022***
> 
> **Bug Fixes**
> 
> - Fixed toLowerCase error when saving items

> ### **1.25.2 - Workflow Get Items**
> 
> ***07/07/2022***
> 
> **Added a get Items Service task to the workflow engine**
> 
> A recurring theme in workflows had process writers going to an external source (like power automate) via a webhook in workflow which simply returns a list of items that can be used in the workflow. As this was such a common action it is now possible to directly configure a service task by setting its type to 'Get Items' This allows for filters, select statements and the option to only get items in a linked context.
> 
> **UI/UX Fixes**
> 
> - Added the ability for subquery and computed fields to be set as titles on the board control
> 
> **Bug Fixes**
> 
> - Fixed an issue where an item will get its permissions set to null if there are extra keys in the permissions object

> ### **1.25.1 - Inherited Fields in Workflow**
> 
> ***30/06/2022***
> 
> **Additional Fields for User Tasks in Workflow**
> 
> A requested feature was added whereby it is now possible to configure sub type fields in workflow for sub types of tasks. This allows custom fields to be added to the ledger which allow it to be referenced by later activities. This feature encompasses the UI upgrade to workflow user task and upgrades to the workflow engine itself to handle these additional fields.

> ### **1.25.0 - Hotfix 1**
> 
> ***27/06/2022* **
> 
> <p class="callout warning">1.25.0 caused a regression that resulted in a page crash when viewing or previewing a form that contained an email field within a repeating section  
> </p>
> 
> ****Bug Fixes**** - Fixed a page crash when viewing a form containing an email field within a repeating section

> ### **1.25.0 - Form Service Fast Renderer**
> 
> ***24/06/2022* **
> 
> **Fast renderer in Form service**
> 
> A different renderer is now used in the form service, notable speed improvements should be noted when using it, especially with longer forms. Virtualisation is added to repeating sections and views where only 5 instances/rows will be rendered at any given time.
> 
> **Bug Fixes**
> 
> - Removed an erroneous multi page nav menu control
> - Fixed an issue where data can be lost when navigating multi pages
> - Fixed an issue where CSS classes were propagating to child elements
> - Fixed an issue where views were not being fetched when configuring a view connection
> - Fixed a page crash when configuring a condition configured to trigger on 'falsey'
> - Fixed the inability to set and view choices for choice fields in Designer
> - Fixed the inability to configure radio inputs
> 
> **UI/UX Fixes**
> 
> - Fixed an issue where lookup config was not loading for connections in Designer
> - Fixed an issue where labels and descriptions sometimes propagated to child elements
> - Fixed an issue where data can bleed across input attributes in designer

> ### **1.24.8 - Form Service Fast Renderer**
> 
> ***17/06/2022***
> 
> **Bug Fixes**
> 
> - Fixed an issue where email fields would set their default value to 'true' automatically
> - Fixed an issue where hidden fields are not being applied correctly in Designer and Preview
> - Fixed an issue where cancelling form details no longer clears the form in Designer
> - Fixed the inability to clone a previously cloned element in Designer
> - Fixed an issue where the first page of multi page is navigated to erroneously
> - Fixed an issue where views are not fetched when configuring a view in Designer
> 
> **UI/UX Fixes**
> 
> - Fixed an issue of config attributes in designer bleeding across different fields
> - Fixed text fields rendering as not read only in Designer
> - Updated the component tree in Designer to be more usable
> - Fixed an issue where repeating sections failed to show one by default

> ### **1.24.7 - Hotfix 1**
> 
> ***14/06/2022***
> 
> <p class="callout warning">1.24.7 caused a regression with bulk updates in gantt, boards and the bulk update action which caused only the first item to get updated</p>
> 
> **Bug Fixes**
> 
> - Fixed an issue with bulk updates not performing

> ### **1.24.7 - Adaptive Designer Performance Overhaul**
> 
> ***10/06/2022***
> 
> **Sharepoint Permission Sync**
> 
> When creating or editing an item with a drive and folder set, the same permissions applied to the item will be applied to that item's folder in sharepoint. This ensures that an item's permissions will be the same as the file permissions.
> 
> **UI/UX Fixes**
> 
> - Added ability to disable create button for current list on data tables in Explorer
> - Fixed lookups in public forms displaying '0' when unset
> - Locale is now set correctly when exporting CSV from data table in Explorer
> 
> **Improvements**
> 
> - Overhaul of Adaptive Designer and the Adaptive Renderer which results in major performance benefits. Render and load times are dramatically decreased

> ### **1.24.6 - Public Form Submission**
> 
> ***1/06/2022***
> 
> **Improvements**
> 
> - Public forms with pre-fill data that are missing the \_\_metadata tag will now try to insert them where possible
> 
> **Bug Fixes**
> 
> - Enabled the following relational data cases to be submitted successfully 
>     - Single Item Create/Update
>     - View Create/Update
>     - View linked to Single item via Universal Link Create/Update
>     - View linked to Single item via Lookup Create/Update

> ### **1.24.5 - Workflow Linking**
> 
> ***26/05/2022***
> 
> **Bug Fixes**
> 
> - Fixed erroneous validation preventing creating a universal link between a task and a custom list that contains the word task in its name via Workflow

> ### **1.24.4 - Adaptive Designer Improvements**
> 
> ***12/05/2022***
> 
> **Bug Fixes**
> 
> - Prefill Data now gets constructed correctly by workflow in single item cases
> - Fixed an issue prefill data failed to load in universal link scenarios
> - Fixed a page crash for view connections that did not contain a columnName attribute
> - Fixed an issue where UI will not update in workflow to input prefill data in certain cases
> - Fixed an issue where prefill data cannot be configured for 2 lookups with the same name
> - Fixed an issue where files failed to be submitted upon form submission
> 
> **UI/UX Fixes**
> 
> - Fixed an issue where first click will not perform add repeating section actions
> - List and column name is now prepended to array prefill data

> ### **1.24.3 - Adaptive Designer Improvements**
> 
> ***05/05/2022***
> 
> **Bug Fixes**
> 
> - Fixed an issue where action buttons were anchoring to a point on page unexpectedly
> - Fixed an issue where starting conditions are applied in the design space when configuring conditions
> 
> **UI/UX Fixes**
> 
> - Added number input to sliders
> - Removed some RAPID system controls from the context menu
> - Now able to set a width and height on embedded controls
> - Added label to accordion sections
> - Added the ability to enable time on embedded form date fields in workflow
> - In Explorer can render embedded forms with date fields with time inputs
> 
> **Improvements**
> 
> - Date fields correctly store their value in memory as ISO strings

> ### **1.24.2 - Adaptive Designer Improvements**
> 
> ***28/04/2022***
> 
> **Bug Fixes**
> 
> - Fixed an issue where repeating sections would display the data of one shared item rather than having their own unique values
> - Now Able to view dates in excel correctly when exporting as CSV from a data table
> - Fixed a page crash when adding an element to a section that has fetch Items turned on
> - Removing a connection now removes all connection data from form schema
> - Fixed an issue where the column layout will apply row spacing above the top row
> - Fixed an issue where default values could not be applied to number fields
> - Fixed the TabControl component where it would not render correctly
> 
> **UI/UX Fixes**
> 
> - Clearing border in the styles tab now removes border properly
> - Re-Added Hidden attribute to fields

> ### **1.24.1 - Adaptive Designer Improvements**
> 
> ***21/04/2022***
> 
> **Bug Fixes**
> 
> - Fixed an issue where duplicate principals can get created rather than linking existing ones in rare cases when using Omnichannel
> 
> **UI/UX Fixes**
> 
> - Added a column layout control which allows for evenly spaced columns
> - Added ability to add a link to an image which will navigate on clicking of the image
> - Updated the embedded control to allow the input of an iframe html src (like youtube embed)
> - Currency fields now display the correct UI
> - Percentage fields now show % icon
> - Removed validation message on email control
> - Added the slider input control - outputs a number
> - Updated the Rating input control - outputs a number
> 
> **Improvements**
> 
> - Started to move away form UUID to using NanoID instead

> ### **1.24.0 - Adaptive Framework Improvements**
> 
> ***14/04/2022***
> 
> **Data Table**
> 
> As a companion to repeating sections the Adaptive Designer now supports the data table control for a more compact way to create, view and edit several items. This control is powered by the new Adaptive data connections using the view mode and is supported in the Anonymous Forms experience.
> 
> **Bug Fixes**
> 
> - Fixed creating meeting events more than 3 months in the future causing automation deletion of that event
> - Fixed crash on sections when using show conditions on children elements
> - Updated flip card control to show children elements correctly
> 
> **UI/UX Fixes**
> 
> - Updated flip card control to show configuration panel correctly
> - Updated icon for flip card control
> - Updated boolean controls to new skinny switch
> 
> **Improvements**
> 
> - Upgraded Carousel control to work with data connections
> - Enabled overriding of default data context when using pre-fill data

> ### **1.23.0 - Adaptive Data Connections**
> 
> ***07/04/2022***
> 
> **Bug Fixes**
> 
> - Fixed whole number control using the decimal input instead of integer input
> - Prevented grid control generating erroneous element IDs
> - Prevented creating a new form setting the page into an error state depending on which controls were added before save
> - Reinstated RAPID Choices being able to use choices defined in the site
> - Fixed panel crash when collapsing the connections configuration
> - Updated Carousel to be a layout control type and pass connections
> - Fixed some configuration failing to dirty the form and prevent saving
> 
> **UI/UX Fixes**
> 
> - Removed debug controls from configuration panels
> - Stopped editing fields from forcing the cursor to the end of the content
> - Improved control search to accept any text characters and retain it's group panel in all states
> - Ensured Rapid Attributes configuration is no longer used in configuration panels
> - Disabled multi-page menu nav control when in edit mode
> - Reinstated placeholder behaviour missing on various fields
> - Allowed title to reflect an element label when the title has not been configured
> - Enabled configuration panels to scroll
> - Updated control categories to remove uncategorized and redundant field/input split
> - The Style configuration tab will no longer 'remember' the previous controls configuration
> - Opening a Office 365 document in the file control will now default to opening the associated local application
> - Updated default label for buttons to 'Submit' from 'submit'
> 
> **Improvements**
> 
> - Added repeating section default buttons
> - Enabled Submit button to handle multiple instances in Anonymous forms
> - Added Contains and Equals condition rules for string and joi type conditions
> - Updated conditions to not process on load in lieu of new initial state configuration

> ### **1.22.3 - Adaptive Data Connections**
> 
> ***31/03/2022***
> 
> ***(Preview)* Adaptive Connections**
> 
> This release introduces the concept of data connections to Adaptive Schemas created in the Adaptive Designer. Data connections allow you to dictate where data comes from and goes to at a per element level of detail. This preview enables the configuration of the Rapid data connector which replaces the old Rapid Attributes configuration, with plans to extend to other services in the future.
> 
> In addition to being able to have your adaptive forms and apps communicate with more than just Rapid, this feature also enables the configuration of related data. For example, you can now create an adaptive form that creates (or updates) an Invoice along with an arbitrary number of invoice detail lines.
> 
> This feature is in preview with a heavy focus on usability improvements over the next week. Any feedback on your experience using connections is highly appreciated.
> 
> **Fetch and Save buttons**
> 
> Along with being able to define more complicated data structures in your adaptive forms, we have also added actions to control fetching and saving data from your connections. These new actions can be applied to action buttons and allow the updating/saving of specific controls in your form.
> 
> As the Save action only targets one element, complex forms with many disparate items are expected to still use the Submit action to save everything at once.
> 
> **Improved Conditions**
> 
> Conditions also got some love in this release. After feedback we have added an initial state configuration so you can now have forms elements that start hidden/disabled and 'unlock' as their condition is met. We have added in Equals and Contains conditions for text data, also thanks to your feedback.
> 
> **Bug Fixes**
> 
> - Prevented adding controls to blank adaptive sections crashing the page
> - Fixed quickly creating blank adaptive schemas saving corrupt
> - Handled extended characters when searching for controls in the adaptive control picker
> - Prevented page crash when navigating to a new adaptive schema and editing it before all controls had loaded
> - Removed initial condition computation in lieu of initial state setting
> - Resolved some cases where adding controls resolved in a corrupt element path
> - Prevented adaptive grid crashing when trying to render negative columns
> - Fixed adding multi-line of text inputs actually adding a single-line of text control instead
> - Fixed adding a whole number control just adding a number control instead
> - Fixed missing placeholder configuration on input field controls
> - Fixed choice fields trying to save their display content instead of their value
> 
> **UI/UX Fixes**
> 
> - Enabled adding of system fields to adaptive schemas
> - Removed Rapid Attributes panel in lieu of new connections infrastructure
> - Applied element connection controls to all adaptive elements
> - Added Rapid view selector to connection configuration panel
> - Added return to site picker / return to launchpad buttons to main adaptive designer page
> - Enabled panel scroll in configuration panels
> - Removed debug 'data path' controls on some element configuration panels
> - Set title of elements to mirror label when empty
> - Disabled multi-page menu in design mode

> ### **1.22.2 - RAPID Meetings**
> 
> ***24/03/2022***
> 
> **RAPID Meetings**
> 
> It is now possible to create manage and sync meetings and meeting events through RAPID. Installing the created Meeting bundle onto your site will give you access to this new feature. A key feature of Meetings is that it will sync with outlook. It will create outlook events and keep them synced to the meeting items in RAPID.
> 
> **Date Time Field Configuration**
> 
> When configuring page definitions in RAPID Designer, it is now possible to specify on the attributes of a date time field for time to be configurable. This will allow for a specific time to be saved to an item when viewing the field on the particular page that has time enabled on the field. This time field uses the user's chrome locale so ensuring it is set correctly is important.
> 
> **Bug Fixes**
> 
> - Prevented Multilookups and multi line text fields being added the all view upon column creation
> - Workflow now shows parent relationships correctly
> - Form schemas are now no longer created corrupt if list name has a space in it
> - Multilookups are no longer added to the default all view when they are created
> - Completing a call activity in certain cases will no longer create duplicate tokens on a parallel merge
> - Ensured update item actions receive correct data structure on submission
> - Ensured tenant name is lower cased in anonymous forms when fetching css from cdn
> - Sections in a multi page component within Adaptive Designer now have correct ID's
> 
> **UI/UX Fixes**
> 
> - Fixed the displaying of elements in a horizontal layout within adaptive designer
> - Ensured lookups and boolean fields are disabled on the canvas in adaptive designer
> - Updated header and panel designer in Adaptive Designer
> 
> **Improvements**
> 
> - Added an internal server for omnichannel
> - Extended the lookup filter and create to scoped and linked items
> - Added a new system list for internal webhooks

> ### **1.22.0 - SendGrid Support**
> 
> ***10/03/2022***
> 
> **SendGrid Support**
> 
> It is now possible to integrate your RAPID Site with sendgrid. It is possible to send emails using this service both through action buttons configured for a list through Explorer and on send and receive tasks through workflow. Refer [here](https://docs.rapidplatform.com/books/rapid-api/page/setting-up-sendgrid-email-support) for a breakdown on configuring sendgrid and integrations to your RAPID site.
> 
> 1. Receive Tasks.   
>     These will pause a process run and wait for an email from the specified address to the specified address. Note, the receiving address must have its domain and subdomain configured through sendgrid
> 2. Send Tasks  
>     These allow you to select an integration and allow the selection of a template from sendgrid to use and allow for the input of variables into this template. It is possible to use expressions in the configuration for the send task in workflow. Executing a send task will send the email, in the template chosen (if one) to the nominated email. The process will then continue.
> 
> **Hidden Field Support**
> 
> Added the ability to set the hidden attribute on a field. Setting this will prevent the field from displaying on a form when that form is opened in either the form or anonymous form experiences. It makes the field immutable but retains the ability for the data to be submitted. The purpose of this is to allow forms to be configured and have data submitted without allowing the user to change or see the data. To configure a field to be hidden, set the hidden attribute on the desired field in the Adaptive Designer.
> 
> **Bug Fixes**
> 
> - Prevented Multilookups and multi line text fields being added the all view upon column creation
> - Workflow now shows parent relationships correctly
> 
> **UI/UX Fixes**
> 
> - Changed the default pages for public form tasks to make them more usable
> - Added the ability to use a context menu to add elements before and after in Adaptive Designer
> - In Adaptive Designer, adding a user field will now set the column that is being looked up (full name)
> 
> **Improvements**
> 
> - Added new system lists which lays the groundwork for Sendgrid and Twilio support (site repair required)
> - In Adaptive Designer, adding elements now uses an action

> ### **1.21.1 - Fill in the Blank (Adaptive Designer)**
> 
> ***09/03/2022***
> 
> **Fill in the Blank Component**
> 
> Added the following component into the Adaptive Designer. It allows for another way of entering data. The intended use for the fill in the blank component is when a form designer wants to make a questionnaire where the inputted answers will be within a block of text. The Fill in the blank component supports all field inputs along with the static text component.
> 
> **Bug Fixes**
> 
> - Fixed adding preconfigured fields to a form through the context menu
> 
> **UI/UX Fixes**
> 
> - Added the ability to select base entity fields when an inherited list is selected
> - Lookups no longer show an ID in Anonymous forms
> - Added the ability to clear attribute and style fields in Designer
> - In Designer, made user fields read only
> - Now able to set an icon and custom label on a submit button

> ### **1.21.0 - Prefill Anonymous Form Data**
> 
> ***28/02/2022***
> 
> **Prefill Data**
> 
> It is now possible to create anonymous forms where field(s) in that anonymous form have data already in them. This data can be dynamically generated by workflow using expressions.  
> 
> - Adds UI in workflow to configure prefill data 
> - Updated the Form Service to accept prefill data
> 
> **Read Only Fields in Explorer**
> 
> It is now possible through page design to set fields to read only, this will allow items to be created or modified externally, but when viewed from Explorer will present the field as Read Only 
> 
> **Improvements**
> 
> - Updated how JSON objects are parsed to Minilith

> ### **1.20.1 - Anonymous Forms**
> 
> ***15/01/2022***
> 
> **Anonymous Forms**You can now create publicly accessible forms via Workflow. An anonymous form has a unique URL that you can send to a 3rd party to fill in. When they submit the form it will then complete the form task which allows your processes to wait until it is completed before moving on. Completed forms will then prevent a person from submitting that form again.
> 
> You can also create anonymous forms ad-hoc by creating a form task. This will generate the unique URL within the task automatically. Ad-hoc form tasks can also be flagged as persistent which will prevent the task from being completed on submission, so that you can send the same form to multiple people.
> 
> **UI/UX Fixes**
> 
> - Added missing icons for some note types in the Activity Feed
> - Prevented description icon being place in incorrect location in designer
> - Removed choice specific configuration on non-choice fields
> - Set the default title and icon for Adaptive Forms system list
> 
> **Bug Fixes**
> 
> - Fixed dart-sass upgrade removing styles
> - Prevented updating a diagram element affecting unrelated elements
> - Fixed error on adding a template file to an embedded file definition
> - Updated recursive task fetching to regard deleted tasks in the middle of the tree
> - Fixed placeholder permissions not being configurable on inherited fields
> - Fixed Linked To lists failing to fetch items via inherited multi-lookup fields
> - Fixed call activity inputs failing to process Lodash templates
> 
> **Improvements**
> 
> - Updated OpenAPI typings for subquery and computed fields
> - Added API routes for view manipulation, see the docs for a breakdown

> ### **1.20.0 - Workflow Usability**
> 
> ***1/12/2021***
> 
> **UI/UX Fixes**
> 
> - Added tree view to workflow diagrams following the Parent column
> - Removed blur effect on process diagrams
> 
> **Bug Fixes**
> 
> - Fixed missing error messages on workflow results pane
> - Fixed page crash on selecting a call activity process for v1 diagrams
> - Resolved test plan diagrams failing to render
> - Prevented uploaded erroneous file names crashing the bundles parser
> - Prevented sequence flow

> ### **1.19.12 - Hotfix**
> 
> ***26/11/2021***
> 
> <p class="callout warning">The previous release (1.19.11) caused a regression which caused a page crash in RAPID Explorer upon interacting with the Explorer nav menu when configured and interacted with in a particular way.</p>
> 
> **Bug Fixes**
> 
> - Fixed regression where expanding an Explorer nav menu item will navigate to a page crash
> - Fixed call activity inputs to regard expressions and all field types

> ### **1.19.11 - General Usability**
> 
> ***25/11/2021***
> 
> **Bug Fixes**
> 
> - Fixed regression where a template file is unable to be selected in Workflow
> - Fixed the recursive link items to respect if a parent item is deleted and then not recurse down in Explorer
> - Fixed placeholder permissions not being applied correctly when an inherited user field is created
> - Fixed a rare issue where inherited types may not be fetched in LinkedTo context if they are linked through a multi-lookup
> 
> **UI/UX Fixes**
> 
> - Fixed minor UI issue with parallel gateways in Workflow
> - Changed the diagram filtering in Workflow to be case insensitive
> - Added Icons to update notes in the activity feed
> - Prevented a tooltip hover covering the close action button on certain field types in Designer
> - Removed a field configuration option for choice type from unrelated fields in the properties pane of a field in Designer
> - Added icons and title for the Adaptive system list
> 
> **Improvements**
> 
> - Added routes to allow users to create and access database views 
>     - This change is fundamental to the Reporting experience which relies on giving the ability for users to create their own views which they can then use in their reporting

> ### **1.19.10 - Hotfix**
> 
> ***16/11/2021***
> 
> <p class="callout warning">The previous release (1.19.9) caused a regression where upon fresh page loads , under rare circumstances would leave the local store (browser storage) in a corrupt state which would lead to a page crash. </p>
> 
> **Bug Fixes**
> 
> - Fixed the inability to lock the All View from Designer if the view has not previously been modified
> - Fixed a page crash when opening in items in rare cases after a refresh

> ### **1.19.9 - RAPID Reports**
> 
> ***16/11/2021***
> 
> **List support for Action Buttons**
> 
> You can now opt for Action Buttons to be presented on items and/or lists. When triggered from a list an action will be made for each selected item on that list.
> 
> In addition, you can now configure a Form to request additional information when pressing an Action Button. These are pulled from your list of Forms in the new Forms Experience and will submit the collected information along with each request.
> 
> Please note that in list scenarios only one form is collected for all selected items.
> 
> **RAPID Forms (Preview)**
> 
> Building on top of the current Form builder in Designer, Forms empowers you to build nice looking input forms with control over styling and support for making more than one kind of item at once.   
> Custom layout options now include support for 
> 
> - sections and sub-sections
> - both horizontal and vertical layouts, including multi-column forms
> - Linkert display for questionnaires
> - and conditional visibility based on form content
> 
> RAPID Forms are broken into two parts:
> 
> 1) [Form Designer](https://designer.rapidplatform.com/) - Build and design your forms with custom layouts
> 
> 2) [Forms](https://forms.rapidplatform.com/) - Browse the forms on your site and fill them in
> 
> **RAPID Reports (Preview)**
> 
> [Reports](https://reports.rapidplatform.com/) enables the creation of PowerBI reports based on your RAPID data straight in your web browser. This is an extension of PowerBI edit mode in Explorer.
> 
> In addition to helping show what reports are currently on the site, you can also create Dashboards that organise reports and views into handy groups to make keeping track of your site data easier than ever.
> 
> **UI/UX Fixes**
> 
> - Added state preservation to pages in Explorer
> 
> **Bug Fixes**
> 
> - Prevented forms breaking when trying to render a deleted column
> - Prevented embedded file components creating their configured sub folder twice
> 
> **Improvements**
> 
> - Updated error handling in SDK to have friendlier error messages

> ### **1.19.8 - Email Attachments**
> 
> ***20/10/2021***
> 
> **Attachments for Email Service Tasks**
> 
> Adding extra functionality to the current email service task for workflow, This allows process writers to add one or more sharepoint drive Item ID's and Folder ID's to the configuration of an email service task, these can be dynamically generated using Lodash expressions. Upon execution of that email service task, the email will be sent with the attachments specified. 
> 
> **UI/UX**
> 
> - Added page state; re-opening an item or page in Explorer will retain the previously opened context
> 
> **Bug Fixes**
> 
> - Fixed double folders being created when adding files to an embedded file component under certain circumstances
> - Made embedded forms more resilient by validating out deleted columns

> ### **1.19.6 - Embedded Form Rework**
> 
> ***12/10/2021***
> 
> **UI/UX Fixes**
> 
> - Fixed embedded form data loading on item load
> 
> **Bug Fixes**
> 
> - Fixed a page crash when viewing process diagrams with null versions
> - Fixed the ability to set the value of dates in embedded forms to null
> - Fixed corruption to service tasks configuration when changing service task types on the same element
> 
> **Improvements**
> 
> - Embedded forms in Explorer are now rendered as adaptive forms

> ### **1.19.5 - Item Action Buttons**
> 
> ***11/10/2021***
> 
> **Action Buttons on Items**
> 
> It is now possible to configure custom action buttons on items in the command bar. These actions include existing menu support to open pages and custom links as well as to trigger custom server endpoints (such as Flows).
> 
> For example, you can now configure a custom Delete action that triggers a Flow which can then delete both the clicked item and all linked items to make ‘bulk’ administration easier.  
> For support in creating and designing your custom actions please contact your representative.
> 
> **Workflow v2 Input Support**
> 
> Workflow v2 Diagrams can now support Inputs and Outputs both for manually started processes as well as Call Activities. These inputs can be [referenced](https://docs.rapidplatform.com/books/workflow-v2/page/process-inputs) within processes using both adaptive expressions and directly on conditional gateways.
> 
> This allows for the creation of processes that can understand the context they are being triggered from without needing to use signal events. As you start building input driven processes, try executing a process manually form within Explorer for that extra ‘on demand’ convenience.
> 
> **Workflow v2 Test Plans**
> 
> For those wanting to ensure their processes keep doing what they expect you can now create test plans for v2 diagrams. Test plans run in a sandbox environment that will not affect anything outside the test. Tests cannot trigger webhooks, create or edit items and cause any other permanent side-effect. 
> 
> When writing a test plan you provide what external information you expect to occur within the test letting you test different scenarios quickly and easily. Test plans are saved making re-testing changes to existing workflows quicker and easier.
> 
> **Bundles v2**
> 
> Bundle support has been overhauled to now support zipped files, which can include table, menu and PowerBI report items to be imported. Extracting a bundle will now generate in the new format. The library of existing bundles have also been updated to conform to the new structure.
> 
> **UI/UX Fixes**
> 
> - Updated advanced pages in Designer to conform to same style
> - Updated signal condition hint text to be accurate for Workflow v2
> - Removed blank option for column types
> - Added word counter on table name creation (limit 50)
> - Added ability to configure time when creating a manual reminder
> - Added configuration to display a choice field as a radio button in Designer
> - Updated delete button in Workflow to use bulk delete action
> - Removed un-used type configuration on Call Activity inputs
> - Added ability to choose which sub-types appear on specific data tables
> - Improved render speed of menu configuration page for sites with large numbers of users
> - Added array handling to DocX template actions in Workflow v1
> - Improved error messages on PowerBI upload
> - Upgraded embedded form components to use new SDK components
> - Improved styling when viewing process runs for Workflow v1 and v2 in Explorer
> - Fixed embedded date fields with erroneous dates showing NaN for all options
> - Updated spelling on table configuration warning message
> 
> **Bug Fixes**
> 
> - Fixed search request for Org Wide emails fetching too many emails
> - Fixed process inputs with null values failing to generate
> - Fixed call activities failing to navigate on click in Explorer
> - Fixed white on white text in menu configuration panel
> - Ensured errors on process run items in Workflow v2 apply visually
> - Prevented changing service task type failing to clean up after itself
> - Fixed opening workflow results panel completing a selected task
> - Prevented page crash in Explorer when manually executing a process with lookup inputs
> - Fixed inputs failing to display in workflow results panel
> - Prevented bulk delete from trying to delete 0 items
> - Prevented page crash when fetching empty diagrams
> - Fixed lookup inputs in processes failing to auto-populate when triggered in Explorer
> - Prevented multi-lookup columns being applied as title columns on tables
> - Stopped endless loop when trying to delete an already deleted item
> - Fixed saving a diagram preventing further edits to fail to save
> - Fixed lookup item creation failing to create sub-types
> - Ensured task notifications are generated when the new assigned to User is the last editor
> - Prevented editing Principals directly through the API
> - Updated Get Item service task to regard expressions in Workflow v2
> - Fixed embedded form configuration with universal links failing to create those links in Workflow v2
> - Ensured expressions in Workflow v2 only regard the last item in looping scenarios
> - Fixed emailing a single file from the File Browser entering an infinite loop
> - Prevented double fetching of items in linked context
> - Fixed bulk deletion failing to update inherited tables
> - Prevented rules on conditional gateway sequence flows marked as default from being calculated
> - Updated actions in menu sidebar contexts to not try and post a missing item profile
> 
> **Improvements**
> 
> - Added principal display and UPN support to network requests
> - Implemented multi-site context management into SDK
> - Added controls to disable AutoFetch in ManagedViewContext in SDK
> - Added typings for Workflow Test Plans to Data-Model
> - Upgraded table deletion to also include shadow views
> - Added expression support for embedded form content into Workflow v2
> - Added unique embedded form IDs in Workflow