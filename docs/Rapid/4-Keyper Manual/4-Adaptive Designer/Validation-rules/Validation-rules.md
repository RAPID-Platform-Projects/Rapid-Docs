# Validation

1) You have to have all the validation rules be true to submit
2) Rule components that do not have a message are not blocking

This means

**Rule 1 (All)**

- Title data is filled : Message `"Required"`
- Status data is filled : Message `null`

**Rule 2 (All)**

- Start Date data is filled : Message `"Required"`


If you submitted this data

```JSON
Title : "Hello",
Status : null,
Start Date : 2020-01-01
```

Rule 1 would validate as:
- Title : True
- Status : False, non-blocking
- Total : False, non-blocking

Rule 2 would validate as:
- Start Date : True
- Total : True

The form would flag Status as required, go red and then submit