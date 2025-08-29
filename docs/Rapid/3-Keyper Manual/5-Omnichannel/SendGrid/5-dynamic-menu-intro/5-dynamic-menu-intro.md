# Sending from Explorer Dynamically

In the previous chapter, we looked at how a SendGrid can be triggered using a Menu button from Explorer view of a data table.

We took the simplest of cases there, ie. of using a static template. The key highlight was - **no workflow was involved.**

In this chapter, we will take a step deeper into this method and attempt to send a Dynamic Email through SendGrid, while triggering it through an Explorer Menu button.

From an application perspective:

Imagine a use case where you are the HR manager evaluating data of applicants for a job post. You are looking through the data table and post analysing each candidate you either select them for next round or reject them.

When you reject them a regret email is sent to the applicant. This is a static email - the case we saw in previous chapter.

When you select a candidate for next round, a personalised email is sent to the candidate with date for next round of interview.

You can already imagine how to perform the first half of this scenario using knowledge from previous Chapter.

In this chapter we will look at how to send personalised email using Menu buttons.

Imagine the ease with which you can perform such manual screening tasks and continue to edit data, perform email communication at the click of a button.

For the ease of discussion, we will showcase the same template, as used in Chapter 2 (Dynamic emails from Workflow). This should give you a better idea on changes needed, holding everything else as constant.

This chapter will build upon the knowledge from previous chapter. So we will see how to **Create a menu button.**

Additionally, in this chapter we will look at how to title the variable in the dynamic template. The variables in the dynamic template should have a prefix **"item.".**  Therefore, as we will see in the next page, a variable in the dynamic template should be written as **\{\{item.name\}\}.**

##### Points to note:

1. **This method requires a dummy Adaptive Document form to be created.** (like seen in previous chapter)
2. **The data table from which the menu button will trigger SendGrid, should have Recipient Name and Recipient Email id fields.** (as seen in last chapter)
3. **The Dynamic template variable should start with prefix "item." (eg. \{\{item.name\}\})**
4. **The data table should have column with the exact same title of the variable. (eg. if the variable is \{\{item.name\}\}, the data table should have a column as "name".)**

The next page provides a step-by-step guide to perform the above.

Below is a video tutorial depicting the same:

<iframe allowfullscreen="allowfullscreen" height="440" src="https://www.youtube.com/embed/ZEYIu6ClD14" width="785"></iframe>