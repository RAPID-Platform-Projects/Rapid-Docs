# Split Choice Component

When presenting different choices to Users, using either a Choice or Radio input, it can be helpful to have the label of each choice be different from the actual value being saved. The split choices option splits the label and value into two parts.

## Configuration

When configuring a Radio or Choice field, clicking the unlink icon wil split that choices' label and value.

![Unlink icon on Choice configuration in Adaptive Designer](<Choice configuration.png>)

You can then configure a different value for each choice.

![5 Choices with different labels and values](<Split Choice.png>)

Now when presented to the User on a Form, both Choice and Radio buttons will still present the label like normal.

![Choice and Radio button on a public form showing the labels](<Rendered Choices.png>)

On submission, instead the configured value will be saved. You can also configure a Radio or Choice input that only saves Number values to non-choice fields within Rapid. For example, here we have a Radio button that presents a Likert style choice, but saves the Numbers 1-5 to the item for later processing.

