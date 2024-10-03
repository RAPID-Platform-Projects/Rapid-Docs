# Gateways

**Gateways** require at least one input and one output connection for the Gateway to be configured properly. To configure a **Gateway**, select it on the **Canvas** and configure it using the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>). Below is a list of all **Gateway** types and their functionality.

| Element Type | Symbol | Function |
| --- | --- | --- |
| **Exclusive Gateway** | ![A screenshot of how the "Exclusive Gateway" appears on the canvas. The Gateway is a diamond shape, with an x symbol inside.](<Gateway Exclusive.png>) | Will only allow the token to travel down a single connection, dependent upon whichever condition in its list of conditions are fulfilled first. If no condition can be fulfilled, the process will continue along the [default flow](</docs/Rapid/4-Keyper Manual/3-Workflow/11-flows/11-flows.md#default-flow>) path. This element is particularly useful for joining incoming flows together. |
| **Parallel Gateway** | ![A screenshot of how the "Parallel Gateway" appears on the canvas. The Gateway is a diamond shape, with an + symbol inside.](<Gateway Parallel.png>) | Will allow the token to travel down all outgoing flows. Each outgoing path is evaluated if it contains a condition, and then it is executed independently of the other paths. This element can also be used for joining multiple incoming flows: the element will wait until all incoming pathways are ready. |
| **Inclusive Gateway** | ![A screenshot of how the "Inclusive Gateway" appears on the canvas. The Gateway is a diamond shape, with a circle inside.](<Gateway Inclusive.png>) | Will active one or more outgoing flows, depending on the conditions attached to each path. |
| **Complex Gateway** | ![A screenshot of how the "Complex Gateway" appears on the canvas. The Gateway is a diamond shape, with an asterisk (*) inside.](<Gateway Complex.png>) | This is not supported at the time of writing.|
| **Event Based Gateway** | ![A screenshot of how the "Event Based Gateway" appears on the canvas. The Gateway is a diamond shape, with an pentagon inside.](<Gateway Event Based.png>) | Will only work with two or more outputs. Each output *must* be connected to an [Intermediate Event](</docs/Rapid/4-Keyper Manual/3-Workflow/6-intermediate-events/6-intermediate-events.md>). The process will wait until one of the **Intermediate Events** immediately downstream from this Gateway activates, then the flow will travel along that path. All other outputs from this gateway will be discarded.|

## Troubleshooting Paths

When configuring the inputs and outputs of a gateway via the [Properties Panel](</docs/Rapid/4-Keyper Manual/3-Workflow/3-drawing-diagrams/3-drawing-diagrams.md>), Rapid provides a helpful UI tool to indicate which paths are being configured.

1. Ensure you have selected the gateway

2. In the **Properties Panel**, hover your cursor over the rules section for an Incoming or Outgoing Connection.

3. On the **Canvas**, the sequence flow that is being configured will appear larger while the mouse cursor hovers over the rule section for that input or output.

![A screenshot demonstrating how Rapid assists users with determining which output or input is being configured in the properties panel. On the Canvas of the Workflow experience is a simple diagram: a start event flows into a  gate, which then splits into two outputs. Each output flows into one of two tasks, both tasks are labelled "Example Task". These two tasks then flow into an end event. Purpose of the diagram: make a choice and then move down one of two pathways pathways and then end. The screenshot is annotated in red to highlight the following: the mouse cursor is hovering over one of the output configuration sections (surrounded by a red circle). The output configuration section is annotated with a red box to indicate the area that can be hovered over. A red arrow points to an enlarged sequence flow element on the canvas, indicating that this is how the UI demonstrates which output is being configured.](<Workflow Flow Direction Assist.png>)