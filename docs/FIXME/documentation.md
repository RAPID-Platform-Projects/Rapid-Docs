# Documentation

**Software Name: Bundles V2**

**Software Version: 2.0.0**

**Software Summary**

Bundles are pre-packaged add-ins that act as a starting point for your RAPID site. They consist of zip files containing files and folders which define what a bundle is. A bundle can be a new menu order for the explorer sidebar or a complete HR product containing all the Workflows and Powerbi reports you'll need to get up and running in the quickest of times.

**How-To Guide - Installing a bundle**

Installing a bundle can be different depending on where you're getting the bundle from.

<!-- <table border="1" id="bkmrk-steps-to-get-started" style="border-collapse: collapse; width: 100%;"><tbody><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">**Steps To Get Started**

</td><td data-type="grid-cell" style="width: 76.0494%;">**Instructions**

</td></tr><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">*Step 1 - Navigate to the Rapidplatform Bundles page.*

</td><td data-type="grid-cell" style="width: 76.0494%;">The best way to install bundles is to navigate to your Rapidplatform site; There, you can navigate to Designer and then Bundles.

Your URL should be as follows:

https://app.rapidplatform.com/{YOUR\_TENANT}/{YOUR\_SITENAME}/Dezigna/advanced/bundles

</td></tr><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">*Step 2 - Pick from the provided Bundles, Or install a custom Bundle.*

</td><td data-type="grid-cell" style="width: 76.0494%;">**Picking from the list:**

If you're picking your bundle from the list, then it's as easy to install a bundle as ever. Just find the bundle you want, click on it to expand its description field, then once you're happy with the bundle, click on the install button on the card. Then Rapidplatform will install your bundle right away.

**Custom Bundle:**

If you're installing a custom bundle, just click on the button at the top of the page that says 'Install Custom Bundle'; from there, you can navigate to where you have stored your custom bundle, and once selected, Click ok to start the installation. You will be shown an install status on the same page, and once finished, you will receive a green toast saying your bundle has been installed.

</td></tr><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">*Step 3 - Explore what's been added.*

</td><td data-type="grid-cell" style="width: 76.0494%;">Navigate To Explorer and find your new bundle has added some extra features.

</td></tr></tbody></table> -->

**How-To Guide - Creating a bundle (On Rapidplatform)**

The best way to create a bundle is to Navigate to your rapidplatform site and design the bundle there, Allowing you to see how the bundle will act and feel before you give it to your users.

<!-- <table border="1" id="bkmrk-steps-to-get-started-0" style="border-collapse: collapse; width: 100%;"><tbody><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">**Steps To Get Started**

</td><td data-type="grid-cell" style="width: 76.0494%;">**Instructions**

</td></tr><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">*Step 1 - Start by identifying what it is you want to provide to your users.*

</td><td data-type="grid-cell" style="width: 76.0494%;">Bundles are constructed by creating Lists in rapidplatform, and then by using the bundle extractor, to download the Lists you've created.

This means that the relationships between each List and their fields will determine how your bundle functions.

</td></tr><tr data-type="grid-row"><td data-type="grid-cell" style="width: 23.8271%;">*Step 2 - Download your bundle*

</td><td data-type="grid-cell" style="width: 76.0494%;">Navigate to the Bundle install page inside of Rapidplatform. There you will see a button that says "Download Bundle", Clicking on that will bring up a Panel with a List of Lists to include inside your bundle.

Clicking on the Lists you want, and clicking next, will then download your bundle right to your default file location.

</td></tr></tbody></table> -->

**How-To Guide - Creating a bundle (Advance)**

Bundles can also be customized to however you like, this section explains how bundles v2 expects to see files and folders, and how to ZIP them all together to get the best experience.

When you download a bundle, you will notice that it gets downloaded as a zip file, this is intentional as the bundle collects all files and folders needed.

Here is the complete bundle v2 folder and file structure.

```
bundles.zip
├── metadata.json
├── pages
│   ├── (page-name).json
├── lists
│   ├── (list-name).json
├── menus
│   ├── (menu-name).json
├── diagrams-v1
│   ├── (diagram-name).bpmn
├── diagrams-v2
│   ├── (diagram-name).bpmn
├── reports
│   ├── (report-name).pbix
```

All folders are optional, but all bundles must have a `metadata.json` to be valid. This is also where you would put your powerBi reports and your BPMN diagrams.

**Tutorials** 🙋🏼‍♂️

<div data-depth="0" data-key="f2f8065c-efca-44fb-badd-1250583bfc8e" data-reset-counter="true" data-scroll-id="5c12c7b7" data-slate-object="block" data-test-id="dragDropTarget" data-type="unstyled" id="bkmrk-installing-a-bundle%3A"><div data-depth="0" data-key="f2f8065c-efca-44fb-badd-1250583bfc8e" data-reset-counter="true" data-scroll-id="5c12c7b7" data-slate-object="block" data-test-id="dragDropTarget" data-type="unstyled"><div><div data-depth="0" data-key="f2f8065c-efca-44fb-badd-1250583bfc8e" data-reset-counter="true" data-scroll-id="5c12c7b7" data-slate-object="block" data-type="unstyled">Installing a Bundle: [https://www.loom.com/share/bf6ec27e70154dc991aa8fbfa8c68aee](https://www.loom.com/share/bf6ec27e70154dc991aa8fbfa8c68aee)</div></div></div></div>Downloading a Bundle: [https://www.loom.com/share/d5bbf3e7bad040248779da1a025064f0](https://www.loom.com/share/d5bbf3e7bad040248779da1a025064f0)

**Frequented Asked Questions** 🤷🏾‍♀️

Can I use PowerBi Reports in my Bundles?

*Yes! PowerBi reports are in full support for bundles v2, you can include them in your bundle or when installing a bundle that already has one, the reports will be installed automatically for you.*

Can I use BPMN Diagrams in my Bundles?

Bundles V2 also has full support for multiple BPMN Diagrams to include in your bundle.