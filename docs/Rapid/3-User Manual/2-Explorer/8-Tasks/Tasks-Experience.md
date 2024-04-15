# Tasks as a Standalone Experience

This is an alternative method of engaging with **Tasks**. 

### Benefits

Using the **Tasks Experience** has several benefits:

- The **Tasks Experience** user interface (UI) enables you to focus on tasks in isolation, rather than viewing the entirety of the Rapid site.
- This can provide further security, as some employees might only need to access their Tasks (as opposed to being able to access the entirety of a Rapid site). This functionality can, however, be implemented using [Permissions](</docs/Rapid/3-User Manual/2-Explorer/1-Tables/6-permissions/6-permissions.md>).
- The **Tasks Experience** has *Light/Dark Mode* functionality built directly into its UI.
- The **Tasks Experience** may render better on devices will a narrow screen, such as iPads.
- **Tasks Experience** integrates closely with **Adaptive Designer**, allowing forms to be created for all Tasks, and specialised forms to be created for certain [Task Inheritances and Subtypes](</docs/Rapid/3-User Manual/glossary/glossary.md#inherit-tables>).

The need to design specific **Adaptive Documents** for items in the **Tasks Experience** means that this is a more advanced and complex solution. Thus, it may not be suitable for your company.

## Accessing the Tasks Experience

### Via Direct URL

Your System Administrator may have provided you with a link to the **Tasks Experience**, or created a link to it as a Sidebar menu button. Alternatively, you can also visit the **Tasks Experience** by visiting the following URL in your web browser:

> `https://tasks.rapidplatform.com/_env/tenant/site`

 **Important:** You must replace `_env/tenant/site` with your Rapid `environment`, `tenant`, and `site`. To determine what your environment, tenant, and site are, refer to the table below, or read the [Accessing Your Site](</docs/Rapid/1-Getting Started/accessing-your-site/accessing-your-site.md>) article.

| Term | Explanation | Example |
|---|---|---|
| Environment | This determines whether you are accessing the `production` database of your site, or the `test` database.| This will usually be set to `/_prod/` in order to access the production database. However, if you wish to access the test database of your site via the **Tasks Experience**, you would replace this with `/_test/` |
| Tenant | This is the subdirectory that follows the top-level domain (`.com/`), in your site's URL. | If I examine the following URL from my site: `https://app.rapidplatform.com/rapidplatform/mysite/`, then `/rapidplatform/` is the tenant, because it follows `.com/`.|
| Site | This is the subdirectory that follows your site's tenant. | In the above example, `/mysite/` is the site's name, because it follows the tenant's subdirectory (`/rapidplatform/`) |

Ensure that no other subdirectories are included in the URL when navigating to the **Tasks Experience**.
For example, the following URL will cause an error, because of the addition of `/tasks%portal` at the end of the URL:
> `https://tasks.rapidplatform.com/_prod/rapidplatform/mysite/tasks%portal`

Instead, remove all additional subdirectories, and the **Tasks Experience** should load as expected:

> `https://tasks.rapidplatform.com/_prod/rapidplatform/mysite/`

### Via Login Wizard

![A screenshot showing how the Tasks Login Wizard appears. The background is dark navy blue with the logo and name Rapid Platform at the top. Underneath are several fields for the user to fill out. Tenant is filled with the example "rapidplatform" and Site is filled with the example "mysite". The environment section has two checkboxes: Test and Production. In this example, production is checked. At the bottom of the screenshot is a button labelled "Sign in with Microsoft 365".](<Tasks XP Login Wizard.png>)

Alternatively, you are able to navigate to the base URL for the **Tasks Experience**, and use the *Login Wizard* to access the tasks for your particular site.

To do this, navigate to `https://tasks.rapidplatform.com` and then enter your `tenant` and `site` information. You must also choose your `environment` via checkbox.

- You can find your login credentials by reading the [Accessing Your Site](</docs/Rapid/1-Getting Started/accessing-your-site/accessing-your-site.md>) article.

It is preferable to navigate to your tasks experience [using direct URL](</docs/Rapid/3-User Manual/2-Explorer/8-Tasks/Tasks-Experience.md#via-direct-url>), to avoid needing to use the wizard each time you wish to access your tasks.

## Tasks Experience Layout

When you first open the Tasks Experience, it will look like the example below:

![A screenshot that shows the layout of the Tasks Experience. Each section of the screenshot is annotated in red, with red boxes surrounding components, red labels with white text that are labelled, and arrows. The labels are on the uppermost part of the image, and are numbered 1-4. The purpose of the image is to indicate what each section of the tasks experience looks like, so the reader can compare them to the list below.](<Tasks XP Annotated.png>)

What follows is an explanation of the labels that annotate the screenshot:

1. **Menu Bar**
    > Clicking on the **Tasks Logo** or **Arrow** beside it will return you to the [Login Wizard](</docs/Rapid/3-User Manual/2-Explorer/8-Tasks/Tasks-Experience.md#via-login-wizard>). This **Menu Bar** has additional functionality when an item is opened.
2. **List Toolbar**
    > This allows you to search for tasks, change your view, refresh the list of tasks, and navigate through the tasks you are permitted to see.
3. **Tasks Form Area**
    > Here is where the Adaptive Form for a particular task will appear. This Adaptive form will need to be created by your System Administrator, otherwise the area will display a message asking you to create the form.
4. **+ Create** and **Light/Dark Mode**
    > You can create new tasks with the **+ Create** button, and change the appearance of the **Tasks Experience** to Dark Mode, or return it to Light Mode.

When you open a Task in the Tasks Experience, and the relevant Adaptive Form is configured correctly, the application will appear like so:

![This is a screenshot demonstrating an example task with an example form. New UI elements have appeared in the header, and in a panel on the right (which only has icons). The new UI elements will be explained below.](<Tasks XP Example Raw.png>)

Below is an explanation of the additional UI elements that are present when viewing a **Task**.

### Menu Bar

This is the dark blue heading bar across the top of the site. Here, you can edit certain system columns that are attached to the Task's item. 

![A screenshot annotated with red box labels with white text, and red arrows indicating what the labels are referring to. The labels are numbers 1-7. Each label and what it describes are explained in the list below.](<Tasks XP Example Header.png>)

1. **🖫 Save**
    > Clicking this button will save any changes made to the current task.
2. **✓ Complete**
    > Clicking this button will do several things:
    > 1. It will set the "Status" of the task to "Completed"
    > 2. It will trigger any [Workflow](</docs/Rapid/3-User Manual/4-Workflow/workflow-introduction.md>) processes that are waiting for the task to be completed.
    > 3. It will remove the task from certain table or task [Views](</docs/Rapid/3-User Manual/2-Explorer/4-Views/4-Views.md>), such as "My Tasks". It will also disappear in views dedicated to seeing upcoming tasks.
3. **Start Date**
    > This is the date when the Task's work is expected to begin, or when the task was created. Note that you can click the date to change it. You must **Save** your changes for the new *Start Date* to take effect.
4. **Due Date**
    > This is the date when the Task's work is expected to be completed. Note that you can click the date to change it. You must **Save** your changes for the new *Due Date* to take effect.
5. **Priority**
    > Here you can set the optional priority of the task. By default, these choices are: *Low, Medium, High,* and *Critical*. These choices are colour-coded.
6. **Status**
    > Here you can set the status of the task. By default, these choices are: *Not Started, In Progress, On Hold, Completed* and *Aborted*. These choices are colour-coded also.
7. **Last Modified**
    > This data cannot be edited directly. It communicates when the last change to the task's data was made. If you make changes and save them, then this text will be dated to read: "Last Modified Today".

It is important to note that any changes made to the Task's **Menu Bar**, or to the fields in the Adaptive Form, will also appear in the Explorer view of the item, and vice versa. For changes to appear, you will need to refresh the item.

### Tasks Sidebar

The **Tasks Sidebar** only appears when viewing a **Task**. Here, you will find additional data that has been included in the item, such as:

![A screenshot that shows how the "Tasks Sidebar" appears. Each of the buttons is numbered with a red box label. There are 6 labels from 1-6. They point at the following icons: 1 points to an information icon that has an i inside a circle; 2 points towards a link icon, which is two chain links; 3 points towards a form being filled out; 4 points towards a stack of files; 5 points towards two speech boxes; six points towards a paper clip icon.](<Tasks XP Sidebar Vertical.png>)

Pressing any of these buttons will open a side panel where additional information can be viewed or manipulated. Each of the sidebar buttons' functionality is discussed in the table below:

| Label | Functionality | Screenshot |
|---|---|---|
| 1 | **Description:** Any text written into the *Description* field of the **Task** via **Explorer** will appear in the side panel as static text.|![A screenshot demonstrating how the description of a task appears in the sidepanel. The description is a sentence of grey, static text that reads: "This is a description of the task, with additional information for any users."](<Tasks XP Sidepanel Description.png>)|
| 2 | **Linked Items:** Any [Workflow](</docs/Rapid/3-User Manual/4-Workflow/workflow-introduction.md>) processes, Universal Links, or Scoped Links will appear here. Note that this panel has similar functionality to the Linked Items menu button. The panel also allows you to visit linked items using the "go to item" button at the end of the **Linked Item**'s name. ([What is a Linked Item?](</docs/Rapid/3-User Manual/2-Explorer/2-Items/6-items-linked/6-items-linked.md>)).|![This is a screenshot demonstrating how Linked Items appear in the sidepanel. Here, "Process Runs (1)" is the title of a box that has been rendered. It means that there is one linked process run. Inside the box is a grey field where the name of the process run is written: "PM: Project Wrap-Up / Sign-Off". And the far right-side of the grey field, is a "go to item" button. This button resembles a square with an arrow in the corner.](<Tasks XP Sidepanel Linked Items.png>)|
| 3 | **Embedded Forms:** If the item has an Embedded Form, it will appear here. Note that you can add data to the embedded form, and save the Task for this data to be saved to the Task item. ([What is an Embedded Form?](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Embedded Forms/Embedded Forms.md>)).|![A screenshot that shows how an Embedded Form appears in the sidepanel. The embedded form in this example has several fields. From top to bottom they are: First Name, Last Name, Description, Additional Details, Team Responsible, Status.](<Tasks XP Sidepanel Embedded Forms.png>)|
| 4 | **Embedded Files:** Any Embedded Files will appear here in the panel. Note that there is a download button so that the file can be downloaded to your device. ([What is an Embedded File?](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Embedded Files/Embedded Files.md>)).|![A screenshot of the Embedded Files panel. In this example there is one file that is rendered as a grey box with the title "Six Week Probation Questionnaire". Inside this box is another grey box with the file name, which reads "Probation Six-Week Report Stacy Queen.pdf". There is a download button below the name of the file.](<Tasks XP Sidepanel Embedded Files.png>)|
| 5 | **Activity Feed:** This presents the task's Activity Feed in the side panel. Any changes to the Task are listed here. ([What is an Activity Feed?](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Activity Feed Component/Activity Feed Component.md>)).|![A screenshot that demonstrates how the Activity Feed is displayed in the side panel. Each item is rendered in a box, with the editor's name and then the words "Updated Task -" and then the name of the task. Note that in this example the editor's name has been blurred out for privacy reasons. Underneath the editor's name is a blue bar that is the heading of a table. There are three columns: "Column", "From" and "To. The "Column" states which column has been changed, "From" states the old value, and "To" states the new value.](<Tasks XP Sidepanel Activity Feed.png>)|
| 6 | **Attachments:** Any file Attachments will appear here in this side panel. Note that at the bottom is a space for you to drag-and-drop files or upload files using your file browser. If a file is uploaded, and the Task is saved, the file will become an attachment to this Task. ([What is an Attachment?](</docs/Rapid/3-User Manual/2-Explorer/3-Pages/2-Page Components/Attachments/Attachments.md>)).|![A screenshot of the attachments panel. In this example it is mostly blank, with a "Drag & Drop your files here" section at the bottom, and a button that states "Or click to upload files".](<Tasks XP Sidepanel Attachments.png>)|

### Tasks Sidebar Alternative

When the screen is a narrow width, the Tasks application will scale to compensate. In this mode, the Sidebar will appear at the bottom of the web application inside of on the side.

The button icons are identical to before, with the addition of a large blue "list" button on the far left. This button opens the **List Toolbar**.

![Alt text](<Tasks XP Sidebar Horizontal.png>)

## Completing Tasks

