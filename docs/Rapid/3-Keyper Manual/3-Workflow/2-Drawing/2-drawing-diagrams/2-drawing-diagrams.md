# Drawing Diagrams

When you open a new **Process Diagram** in **Workflow**, the user interface will resemble the following image:

![A screenshot of the Workflow application and its user interface. At the top of the site is the Command Bar, which contains buttons and functions such as saving, editing, zooming in and out, etc. On the left-hand side of the site, next to the Sidebar, is the Toolbar. The toolbar contains all of the drawing buttons, which are represented by icons. In the centre of the image is a "Canvas" where the process diagram will be drawn. Currently, only a circle exists in the canvas. On the far right side of the site is the "Properties Panel", where elements can be edited or coded.](<Diagram Canvas.png>)

| Section | Explanation |
| --- | --- |
| **Command Bar** | Here is where the buttons for editing the **Process Diagram** as a whole exist. For example, the following buttons here are (from left to right): Save, Editing the **process**'s Name and Details, Zoom Out, Zoom In,  Download Diagram, Review **Process Runs**, Open Process Runs in Explorer, the Inline Refresh, and the **Launch Process** buttons. |
| **Toolbar** | Here are where the buttons for drawing the **Process Diagram** can be found. The [specific buttons and their functions are discussed here](</docs/Rapid/3-Keyper Manual/3-Workflow/2-Drawing/1-drawing-tools/1-drawing-tools.md>).|
| **Canvas** | This is where the process diagram will be drawn. |
| **Properties Panel** | This is where each element in the **Process Diagram** can be configured or have its inputs and outputs scrutinised. To view an element in the **Properties Panel**, first click on the element on the **Canvas**. Clicking the background of the **Canvas** will cause the Properties Panel to display the properties of the entire **process diagram** instead. |

:::info[Properties Panel]
The **Properties Panel** can be revealed or hidden, using the double chevrons at the top of the panel.

![A screenshot that shows the location and appearance of the double chevron that can hide or reveal the "Properties Panel". The screenshot is annotated with a red box to highlight the button's location.](<Properties Hide.png>)

**Above:** This icon will hide or expand the Properties Panel.
:::

## Adding Elements

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

![A screenshot that shows the appearance of the new element buttons within the configuration panel. The screenshot is annotated with a red box to highlight the location of the buttons.](<Workflow Configuration Panel Add.png>)

2. Select the new element symbol from the **Configuration Panel**. These element symbols match the symbols from the **Toolbar** with a few exceptions noted below.

![A screenshot that shows the location of the new Task button. The screenshot is annotated with a red box to highlight the location of the button. In this example, the user's cursor is about to click the button. The button has an icon of a rectangle with rounded corners, and a user image in the upper-left corner.](<Workflow Configuration Panel Add Task.png>)

3. The selected element will now appear on the **Canvas** and will be linked *downstream* from the first element.

![A screenshot that shows how a task added via the configuration panel will appear. The task element has a dotted rectangle surrounds the element, indicating that it has been selected. Inside the task element, a vertical line cursor is blinking, indicating that text can be typed here. To the right of the task element is a series of button represented by icons. These will be described in more detail later in the article.](<Workflow Configuration Panel Added.png>)

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

## Deleting Elements

### Deleting Elements via Keyboard

Pressing the **Delete** key on the keyboard will delete an element or link that is selected on the **Canvas**.

### Deleting Elements via the Configuration Panel

Alternatively, you can delete an element or link by doing the following:

1. Select the element or link by clicking on it

2. Press the **Delete** button that appears in the **Configuration Panel**

![A screenshot demonstrating the appearance and location of the delete button in the Configuration Panel. The screenshot is annotated with a red box to highlight the location of the "Delete" button. The icon for the "Delete" button resembles a trash can.](<Workflow Configuration Delete.png>)