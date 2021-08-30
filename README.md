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

## /api/potlucks/new

*body required*

> {
>
>     "potluck_name" :  [string],
>     "location" : [string],
>     "date" : [string],
> }

:octocat:
## /api/dishes/new

*body required*

> {
>
>     "dish_name" :  [string],
>     "eaches" : [number],
>     "image source" : [string],
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

## /api/potlucks

*no body required*


:octocat:
## /api/dishes

*no body required*


:octocat:
# PUT

## /api/potlucks/update/:id

  *not all arguments are required, only those you wish to update*
> {
>
>     "potluck_name" :  [string],
>     "location" : [string],
>     "date" : [string]
> }


:octocat:

## /api/users/update/:id

  *not all arguments are required, only those you wish to update*
> {
>
>     "username" :  [string],
>     "password" : [string],
>     "name" : [string],
>     "email" : [string]
> }

## /api/dishes/update/:id

  *not all arguments are required, only those you wish to update*
> {
>
>     "dish_name" :  [string],
>     "eaches" : [number],
>     "image source" : [string]
> }


:octocat:
# DELETE

## /api/users/delete/:id

  *no body required*

:octocat:

 ## /api/potlucks/delete/:id

  *no body required*

:octocat:

## /api/auth/logout

*no body required*

:octocat:

## /api/dishes/delete/:id

*no body required*


:octocat: :octocat: :octocat:

:boom: :boom: :boom:

TODO:
 %%%%% some endpoints do not yet have test code, all have been manually tested for errors, please submit any edge  cases found by creating a new issue &&&&&&&&&
