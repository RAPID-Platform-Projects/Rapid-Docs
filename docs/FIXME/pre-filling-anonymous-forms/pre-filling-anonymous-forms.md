# Pre-filling Anonymous Forms

As of RAPID Version 1.23.0 the preview of connections is available in Adaptive Schemas, this comes with greater support for item creation including relation items.

When setting up an adaptive schema with a connection to be an anonymous form, ensure that all connections are set so that 'Fetch items on load' are False.

When configuring prefill data there are two modes of operation, Single Item and View. Single Item configuration behaves as before; when configuring the prefill data in Workflow each column in the adaptive schema will be presented and can be filled in. View configuration requires an array of elements. This array should be in the JSON string format`    [        {object you want to prefill}    ]`