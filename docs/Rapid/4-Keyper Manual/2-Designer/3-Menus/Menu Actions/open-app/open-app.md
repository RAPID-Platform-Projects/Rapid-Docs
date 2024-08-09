# Open App

This is configurable on both the **[Side Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar>)** and **[Command Bar](</docs/Rapid/3-User Manual/glossary/glossary.md#command-bar>)** menu types.

## Overview

There are three principle Rapid Platform Application:

1. [**Explorer**](</docs/Rapid/3-User Manual/glossary/glossary.md#explorer> "Explorer")
2. [**Designer**](</docs/Rapid/3-User Manual/glossary/glossary.md#designer> "Dezigna")
3. [**Workflow**](</docs/Rapid/3-User Manual/glossary/glossary.md#workflow> "Compoza (Workflow)")

Do you wish to put a menu item in a [**sidebar**](</docs/Rapid/3-User Manual/glossary/glossary.md#sidebar> "Sidebar") that navigates to one of these applications.

OR

You may wish to configure a menu button, which when clicked opens (say) **a particular workflow diagram.**

There can be other reasons, but if the question is - Is it possible configure a menu button to open an app? The answer is **YES.**

## How to configure a Menu button to "Open a Rapid App"

1. Press the Edit button on the desired menu button
2. **App** - This is the mandatory field and allows you to specify which app you wish to point here.

**Please note:** You can only call RAPID applications here. It is not meant for external application.

Presently, there are three principle apps in RAPID:

1. Explorer
2. Designer
3. Workflow

The below table provides the keyword that needs to be entered in the App field to call respective RAPID applications

| Application to call | Keyword to write in App field |
|---|---|
| Explorer | Explorer |
| Designer | Designer |
| Workflow | Workflow |

*Please note that you need to enter the Keywords exactly as matching here. However, these keywords are not case sensitive.*

3. **Sub-path** - This field helps you provide partial URL that will allow the user to navigate to a specific page in the application.

For example - Imagine you wish to create a menu button that when pressed, navigates to:
[ https://test.rapidplatform.com/rapidplatform/documentation/compoza/blueprint/1/modeler](https://test.rapidplatform.com/rapidplatform/documentation/compoza/blueprint/1/modeler)

To achieve this, you need to fill:  
  
**Workflow** in the App field

**blueprint/1/modeller** in the Sub-path field

Hence, in the Sub-path, you only need to provide the portion of the URL as seen after the application keyword.

![Open App Config](<Open App Config.png>)