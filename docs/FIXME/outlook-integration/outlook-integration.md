# Outlook Integration

Omnichannel supports Outlook event syncing natively. This allows you to create meeting events in your RAPID site and have them sync up to your Outlook calendar.

For security reasons RAPID will not sync meetings created outside your site. To 'register' a meeting event for syncing,

1. Create a new Meeting item to hold the event
2. Create a new Event item

#### Tables Required

Meetings integration depends on the Meetings Bundle (available in the bundle library).

This includes the following tables

##### Meetings

This covers the base of a meeting or meeting series. The Organiser will be the principal calendar that will store the events for that meeting.

##### Meeting Events

Each time people meet up is an event. The events table covers the who, when and where to help people meet up. For once-off meetings, they will need a single Meeting and Event item. For recurring meetings, each event falls under the same meeting item.

Invitees, Attendees, and Guests:

- Invitees are persons who have been invited to the meeting event (Multiple lookup to principals).
- Attendees are person who actually attended the meeting events (Besides guests).
- Guests are persons from an external organization invited to the meeting event (Multiple lookup to External Contacts).

##### Meeting Agendas

Tracking what will be covered in the meeting, agenda items can be used to prepare a sorted and organised list of topics.

##### Meeting Minutes

Minutes are a kind of note, tracking what was decided within an event. By default the Meetings bundle has enabled link inheritance for Minutes so they can be applied to Agenda items and/or Events and still bubble up to the appropriate Event/Meeting to make seeing what was decided easier.

##### Meeting Subscriptions

Subscriptions empower Outlook to update RAPID with changes. Each subscription 'listens' for changes on Outlook for Events created in your site. Removing a subscription will turn off syncing from Outlook, while adding a new meeting will create a subscription.

#### Internal Webhooks Required

In order to power the outlook syncing, a series of internal webhooks are required to be installed on the site.

|Field|Value|
|:----|:----|
|Title|Delete Outlook Subscription|
|Table|Meeting Subscriptions|
|Trigger|Items Deleted|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/subscriptions/delete`|

|Field|Value|
|:----|:----|
|Title|Delete Event in Outlook|
|Table|Meeting Events|
|Trigger|Items Deleted|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/event/delete`|

|Field|Value|
|:----|:----|
|Title|Delete Event in Outlook|
|Table|Meeting Events|
|Trigger|Item Deleted|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/event/delete`|

|Field|Value|
|:----|:----|
|Title|Update Event in Outlook|
|Table|Meeting Events|
|Trigger|Item Updated|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/event/update`|

|Field|Value|
|:----|:----|
|Title|Create Event in Outlook|
|Table|Meeting Events|
|Trigger|Item Created|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/event/create`|

|Field|Value|
|:----|:----|
|Title|Create Subscription for Outlook|
|Table|Meeting|
|Trigger|Item Created|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/meeting/create`|

|Field|Value|
|:----|:----|
|Title|Update Meeting Subscription|
|Table|Meeting Subscriptions|
|Trigger|Item Updated|
|Service|Omnichannel|
|Callback URL|`/<Tenant>/<Site>/0/services/rapid-meetings/subscriptions/update`|
