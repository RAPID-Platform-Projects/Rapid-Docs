# Pipeline

The **Pipeline** component allows a user to quickly and visually assess the status of an item. For example, a **Pipeline** could be used to indicate the location of a client within a sales funnel, or the corrective stage of an incident report.

![A screenshot of an example pipeline component. The pipeline consists of three large and stylised arrows that flow into each other. Each arrow has a word on it: "New", "Open", and "Closed". In this example, the "New" arrow is coloured with blue, whereas the "Open" and "Closed" arrows in the pipeline are grey. This indicates that the pipeline is at the first "New" step.](<Pipeline Example 1.png>)

> A **Pipeline** component set to the "New" choice.

![A screenshot of an example pipeline component. The pipeline consists of three large and stylised arrows that flow into each other. Each arrow has a word on it: "New", "Open", and "Closed". In this example, the "New" arrow is coloured with blue, the "Open" arrow is coloured with yellow, and the "Closed" arrow is coloured with green. This indicates that the pipeline has reached the end, as "Closed" is coloured.](<Pipeline Example 2.png>)

> A **Pipeline** component set to the "Closed" choice.

## Pipelines Inherit from a Choice Column

In order to use a **Pipeline Choice**, a *Choice Column* must first be present on the table.
- You can learn about [adding a column to a table](</docs/Rapid/4-Keyper Manual/2-Designer/1-Tables/5-Table Configuration Guides/how-to-add-columns-to-a-data-table/how-to-add-columns-to-a-data-table.md>)
- You can also learn about [adding a pipeline component to a page](</docs/Rapid/4-Keyper Manual/2-Designer/2-Pages/3-Components/pipeline/pipeline.md>).

## Pipeline Synchronise with a Choice Field

Selecting a value in the **Pipeline** is identical to selecting the option from a **Choice**-type field. If you have the same field added as a **Choice** field, they will always be in sync with each other. 

![Pipeline with a choice field](<Pipeline with a choice field.png>)

The colour of the **Pipeline** choices are derived from the **Choice** column. If colours are defined in the options of a **Choice** column, they will appear in the Pipeline.  

![Choice field colour configuration](<Choice field colour configuration.png>)