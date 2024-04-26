# Drawing Diagrams

When you open a new **Process Diagram** in **Workflow**, the user interface will resemble the following image:

![A screenshot of the Workflow application and its user interface. At the top of the site is the Command Bar, which contains buttons and functions such as saving, editing, zooming in and out, etc. On the left-hand side of the site, next to the Sidebar, is the Toolbar. The toolbar contains all of the drawing buttons, which are represented by icons. In the centre of the image is a "Canvas" where the process diagram will be drawn. Currently, only a circle exists in the canvas. On the far right side of the site is the "Properties Panel", where elements can be edited or coded.](<Diagram Canvas.png>)

| Section | Explanation |
| --- | --- |
| **Command Bar** | Here is where the buttons for editing the **Process Diagram** as a whole exist. For example, the following buttons here are (from left to right): Save, Editing the **process**'s Name and Details, Zoom Out, Zoom In,  Download Diagram, Review **Process Runs**, Open Process Runs in Explorer, the Inline Refresh, and the **Launch Process** buttons. |
| **Toolbar** | Here are where the buttons for drawing the **Process Diagram** can be found. The [specific buttons and their functions are discussed here](</docs/Rapid/4-Keyper Manual/3-Workflow/2-drawing-tools/2-drawing-tools.md>).|
| **Canvas** | This is where the process diagram will be drawn. |
| **Properties Panel** | This is where each element in the **Process Diagram** can be configured or have its inputs and outputs scrutinised. To view an element in the **Properties Panel**, first click on the element on the **Canvas**. Clicking the background of the **Canvas** will cause the Properties Panel to display the properties of the entire **process diagram** instead. |

## Adding Elements

There are two methods for adding a diagram element onto the page.

### Adding Elements via the Toolbar

1. Select the diagram element on the toolbar

2. You will notice that an orange element has now been attached to your cursor

![A screenshot demonstrating that once a toolbar button is pressed, a shape will appear in orange below the cursor. In this example, the mouse cursor has selected the rectangle "Task" element. Below the cursor (partially cut off by the toolbar) is the orange task element ready to be placed.](<Workflow Click Toolbar.png>)

3. Now when you move your mouse, the shape will also move as well. Your cursor may also change to a fist, to indicate that it is "holding" the element you selected.

![A screenshot demonstrating how the cursor will change while dragging an element. The mouse cursor resembles a fist clenching onto the rectangle task shape below it.](<Workflow Drag Element.png>)

4. Position the element on the **Canvas**, and then click to place it. Once the element is placed, the following will occur:
    - The shape's outline will change from orange to black, indicating that it is no longer being positioned on the **Canvas**.
    - A dotted outline will appear around the element, indicating that it has been selected.
    - The **Configuration Panel** will appear beside the element. The Quick Add panel is a series of additional buttons for quickly configuring an element or attaching additional elements.
    - A flashing cursor in the centre of the element will indicate that you can type a title into the centre of the element.

![A screenshot demonstrating the appearance of an element once it has been placed on the canvas. The element now has a black rectangle outline, rather than an orange one. Further out from the element's edge, a dotted rectangle surrounds the element, indicating that it has been selected. Inside the task element, a vertical line cursor is blinking, indicating that text can be typed here. To the right of the task element is a series of button represented by icons. These will be described in more detail later in the article.](<Workflow Placed Element.png>)

:::note[Repositioning]
You can reposition an element after it is placed, by clicking and dragging on the element. You will not be able to reposition an element if it is expecting you to type a label (i.e. the text cursor is flashing in the centre of the element). In this case, you will need to de-select the element first, and then it can be dragged as usual.
:::

### Adding Elements via the Configuration Panel

After selecting an element on the **Canvas**, a panel of buttons will appear beside the element. This is the **Configuration Panel**. This panel allows you to configure, delete, or link elements. However, it also allows you to create a new element and add it "downstream" of the current element. This means the element will be placed on the canvas for you, and the two elements will be linked.

To add an element via the **Configuration Panel**:

1. Select an element by clicking it

![Alt text](<Workflow Configuration Panel Add.png>)

2. Select the new element symbol from the **Configuration Panel**. These element symbols match the symbols from the **Toolbar** with a few exceptions noted below.

![Alt text](<Workflow Configuration Panel Add Task.png>)

3. The selected element will now appear on the **Canvas** and be linked *downstream* to the first element.

![Alt text](<Workflow Configuration Panel Added.png>)

:::note[Configuration Panel Elements]
There is an additional type of element that is not present in the **Toolbar**. The **Text Annotation** element is used for adding additional documentation to an element onto the **Canvas**.

![A screenshot demonstrating the location and appearance of the "Text Annotation" button within the "Configuration Panel" of workflow. The screenshot is annotated with a red box to indicate the location of the button. The button's icon resembles a square bracket, with a dotted line attached to it.](<Workflow Configuration Annotation.png>)

If you select the annotation element, you will be prompted to type text into a resizeable text field that can be placed onto the **Canvas**. Note that the **Text Annotation** does not affect how a process runs.

![Alt text](<Workflow Annotation on Canvas.png>)
:::

## Aligning Elements

**Workflow**'s UI will indicate whether two elements are aligned while you are dragging an element to place it. Note that when to objects are aligned correctly, a yellow line will appear and bisect the two objects, indicating that they are aligned along that axis.

![A screenshot demonstrating how the UI will change to indicate that an element is aligned with another element. In this example, a task is being dragged into place beside a start event element. Because the items are aligned, a yellow line has appeared that horizontally bisects the two objects, indicating that they are both in alignment.](<Workflow Aligned Elements.png>)

> Two elements aligned along the horizontal axis

![A screenshot demonstrating how the UI will change to indicate that an element is aligned with another element. In this example, a task is being dragged into place below the start event element. Because the items are aligned, a yellow line has appeared that vertically bisects the two objects, indicating that they are both in alignment.](<Workflow Aligned Elements 2.png>)

> Two elements aligned along the vertical axis

## Illegal Placement

You cannot place an object on top of another object. If this occurs, the object that is being infringed upon will turn red. If you release the cursor when an object is being illegally placed the following will occur:

![A screenshot demonstrating the appearance of an element when another element will be placed on top of it. In this example, the orange task rectangle is being placed atop the start event element. The start event element is now highlighted in a faint red, indicating that this is an illegal placement.](<Workflow Illegal Placement.png>)

- **When adding a new element:** the element being placed will disappear, and need to be selected from the toolbar again.
- **When repositioning an element:** the element will return to its old location on the **Canvas**. (This location is indicated by a feint grey outline of the element while it is being repositioned).

## Element Titles

Elements can have a *Title* added. Adding titles to your elements will improve the readability of your process and assist with troubleshooting. If no titles are added to a diagram, the diagram will be difficult to read and understand.

![A screenshot demonstrating a diagram with no titles added. The diagram includes a Signal Start Event on the left, (a symbol of a circle with a triangle inside). This then is linked via an arrow to a User Task in the middle (a rounded rectangle with the icon of a person in the upper left). This is finally linked to an End Event on the right (a circle with a thick outline). The purpose of this image to to communicate that this diagram is difficult to comprehend without labels added.](<Workflow Element No Titles.png>)

> **Above:** An example diagram with no titles.

![A screenshot demonstrating how titles are displayed on elements in a Workflow Diagram. In this example, a Signal Start Event has the title "Wait for Workflow to be trigged by Menu Button" beneath it. It connects to a Task element with the title "Create Task for Manager", which finally connects to an End Event element with the title "End Process".](<Workflow Element Titles.png>)

> **Above:** The same diagram, with titles added. 

Large elements (such as Tasks) will display their titles within the element's symbol. Smaller elements (such as **Start Events** or **End Events**) will display their title text underneath the element symbol.

There are several methods for adding a title, which are explained below.

### Adding Titles When an Element is Placed

After an element is placed, Workflow's UI immediately will prompt you to give the element a title.
![A screenshot demonstrating the appearance of an element once it has been placed on the canvas. The element now has a black rectangle outline, rather than an orange one. Further out from the element's edge, a dotted rectangle surrounds the element, indicating that it has been selected. Inside the task element, a vertical line cursor is blinking, indicating that text can be typed here. To the right of the task element is a series of button represented by icons. These will be described in more detail later in the article.](<Workflow Placed Element.png>)

1. Type the desired title into the element

2. Confirm the title by:
    - Pressing **Enter** or **Return** on your keyboard, or
    - Clicking on the **Canvas**.

### Adding Titles via the Configuration Panel



### Adding Titles via the Properties Sidepanel



## Linking Elements Together

Elements that are added to a process should be connected to other elements to create a flowchart diagram. There are two methods for linking items together.

### Using the Configuration Panel

Selecting an item, and then selecting an element from the [Configuration Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md#adding-elements-via-the-configuration-panel>), will cause the two elements to become linked. The element that was placed first will be "upstream" (i.e. it will be processed first). This is indicated by the direction of the link's arrow.

    - Select the **Global Connect** tool from the toolbar
    - 
    
![Alt text](<Workflow Global Connect.png>)