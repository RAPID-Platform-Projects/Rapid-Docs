# Sending from Explorer

In the previous chapters, we have seen how SendGrid can be triggered using a Workflow process designed in RAPID Platform.

In this chapter, we will look at another way of sending emails from RAPID Platform via SendGrid. This method involves creating a Menu button in the Explorer view of a Data Table.

**How is this method different from application perspective?**

While the workflow method can be configured to trigger SendGrid automatically based on certain conditions, the use of Menu buttons facilitate sending emails with manual intervention.

It is typically useful, when while scanning a data table, the observer finds the need to send an email to a particular / group of entities. For example - sending rejection emails after evaluating a list of candidates for a job.

In this chapter we will take the simple case of sending a static email through a Menu Button.

The chapter will discuss following key points:

1. Creating a menu button
2. Configuring the menu button to integrate with SendGrid's static template.

##### Points to note:

1. **This method requires a dummy Adaptive Document form to be created.**
2. **The data table from which the menu button will trigger SendGrid, should have Recipient Name and Recipient Email id fields.**

The next page provides a step-by-step guide to perform the above.

Here is a video tutorial discussing the same:

<iframe allowfullscreen="allowfullscreen" height="440" src="https://www.youtube.com/embed/Etb3JRu2FE4" width="785"></iframe>