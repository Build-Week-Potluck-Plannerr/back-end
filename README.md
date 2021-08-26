https://mysterious-river-93270.herokuapp.com

:octocat:

# POST

## /api/auth/register

*body required*

> {
>
>     "username" :  [string],
>     "name" : [string],
>     "password" : [string],
> }

:octocat:


## /api/auth/login

*body required*

> {
>
>     "username" :  [string],
>     "password" : [string],
> }

:octocat:

# GET

## /api/users

*no body required*


:octocat:


## /api/auth/logout

*no body required*


:octocat: :octocat: :octocat:

:boom: :boom: :boom:

TODO:
 * PUT update user information
 * DELETE update user information
 * POST Food tables { name: '', pictureSrc: '' }
 * PUT Food tables { name: '', pictureSrc: '' }
 * POST event {attending: [array], foods: [array], date: [date], location: [string] }
 * DELETE event [id]
 * PUT update event {attending: [array], foods: [array], date: [date], location: [string] }
