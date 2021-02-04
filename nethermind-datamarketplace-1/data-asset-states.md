# Data asset states

## Valid state transitions

* Unpublished to Published
* Published to Under Maintenance
* Under Maintenance to Published
* Published to Closed

#### End States:

* Closed

#### Visibility for Consumers:

* Unpublished - not visible
* Published - visible
* Under Maintenance - visible
* Closed - visible only if user has made deposits in the past

#### Ability to Make Deposit by Consumer

* Unpublished - not possible
* Published - possible
* Under Maintenance - possible
* Closed - not possible

#### Ability to Start a Session by Consumer

* Unpublished - not possible
* Published - possible
* Under Maintenance - not possible
* Closed - not possible

