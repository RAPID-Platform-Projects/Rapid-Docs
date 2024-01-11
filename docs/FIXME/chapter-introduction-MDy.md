# Chapter Introduction

In the previous chapter, we had seen :

- How to setup a **Send Task to integrate with SendGrid Template.**
- How to send a Static email like Newsletter to a desired email id.

In this chapter we will take a step deeper and try to configure a Dynamic email.

Personalised emails have better reception. For example, addressing the recipient with their name.

In this chapter we will create a small Lead Details capture and automatic acknowledgement application in RAPID Platform.

**The application will perform in the following manner:**

1. Lead clicks a button to express interest in logging a query about the service.
2. Lead receives a simple form to fill in details: 
    - Lead Name
    - Lead Email
    - Lead Query
3. An automatic acknowledgement email is sent to the Lead's ID. The email is addressed to the Lead Name and the email body shows the Lead Query submitted.

In this chapter we will attempt to configure RAPID Platform to:

1. Create an Adaptive Document Form to capture Lead Details
2. Create a Data Table to store Lead Details
3. Create a Workflow, similar to Chapter 1, which uses a Send Task to integrate with SendGrid Template.

*We have separate fundamental guides on creating Adaptive Documents and Data Tables.*

Therefore, we can say that this chapter will build on the knowledge provided in the previous chapter and takes the output to the next level, which can be used in a more pragmatic business scenario.

The next page provides a step-by-step guide to achieve the above.

Below is a video tutorial for the same:<iframe allowfullscreen="allowfullscreen" height="440" src="https://www.youtube.com/embed/wKz3zlJGd08" width="785"></iframe>