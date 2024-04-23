# Drawing Tools

This section will focus on the drawing tools included in the **Workflow** application.

When you open a process diagram in the **Workflow** application, all of the diagram-drawing tools will be located in the left-hand toolbar.

Each of the tools are discussed in detail below, in the order that they appear in the toolbar.

| Tool Name | Icon | Description |
| --- | --- | --- |
| **Hand** | ![Alt text](<Diagram Tool Hand.png>) | **Used for dragging on the canvas to reposition the "camera" of the editor.** Note that to scroll across the canvas, you can also: click-and-drag on the empty white canvas background; hold the spacebar on your keyboard and move the mouse; or position your mouse at the edge of the canvas to scroll towards that edge. |
| **Lasso** | ![Alt text](<Diagram Tool Lasso.png>) | **Useful for selecting multiple components at once.** Click-and-drag to draw a boundary box, and release to select the items inside the boundary box. |
| **Create / Remove Space** | ![Alt text](<Diagram Create Space Tool.png>) | **Useful for repositioning an item or groups of items.** The cursor will become a crosshair with a dotted x and y plane extending from the cursor. Clicking and dragging either vertically or horizontally will create or remove space along the chosen axis. |
| **Global Connect** | ![Alt text](<Diagram Tool Connect.png>) | **Used for connecting objects together.** Note that selecting on an object in the canvas will also display this tool in the pop-up. |
| **StartEvent** | ![Alt text](<Diagram Tool Start.png>) | **Place a Start Event on the canvas.** Start events can be triggered by a variety of conditions. When a start event is triggered it creates a "token". This token moves along the workflow process, down the assigned global connections and to the tasks or other events. To configure this event: select it once the object is placed on the canvas, and press the wrench icon.. |
| **Intermediate / Boundary Event** | ![Alt text](<Diagram Tool Intermediate.png>) | **Place an Intermediate or Boundary Event on the canvas.** These events can be triggered by a variety of conditions. To configure this event: select it once the object is placed on the canvas, and press the wrench icon.. |
| **EndEvent** | ![Alt text](<Diagram Tool End.png>) | **Place an End Event on the canvas.** This event causes the token to be terminated and closes the workflow process. |
| **Gateway** | ![Alt text](<Diagram Tool Gateway.png>) | **Place a Gateway on the canvas.** A gateway can have logic assigned to it, and causes the token to divert down a number of paths depending on the logic applied. To configure object event: select it once the object is placed on the canvas, and press the wrench icon.. |
| **Task** | ![Alt text](<Diagram Tool Task.png>) | **Place a Task on the canvas.** Typically a task is either assigned to the Rapid System to complete, or assigned to a specific user to complete. To configure this object: select it once the object is placed on the canvas, and press the wrench icon. |
| **Expanded Sub-Process** | ![Alt text](<Diagram Tool Subprocess.png>) | **Place a sub-process on the canvas.** This is a process within a process, and is useful for completing necessary small tasks while the main task is running. |
| **Data Object Reference** | ![asdf](<Diagram Tool DataObjectReference.png>) | |
| **Data Store Reference** | ![Alt text](<Diagram Tool DataStoreReference.png>) | **Place a Data Store Reference on the canvas.** Also known as **Data Cans**, this object allows you to access items from specific tables. The database's items can also be changed or updated using a this object. |
| **Pool / Participant** | ![Alt text](<Diagram Tool Pool.png>) | **Place a Pool / Participant on the canvas.** Also known as **Swim Lanes**, these allow you to organise your workflow. A common practice is to have Data Cans in the top row; then to have system tasks, events, and processes in the centre row; and finally, to have user tasks in the bottom row. Using this method, you can see at a glance all of your data, system processes, and people processes. |
| **Group** | ![Alt text](<Diagram Tool Group.png>) | |