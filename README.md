# Good Poet API v1.0 #

Components
* User
* Poem
* Role
***
Role
* No registry (nr)
* Author (au)
* Admin (ad)
***

METHOD   | URI                  | OPTION		  | RIGHTS
---------|----------------------|-------------------------|--------
GET      | /users/[:id]/poems   | get all user poems      | nr/au	
POST     | /users/my/favorite   | add favorite user       | au
GET      | /users/my/favorite   | get all favorites users | au
DELETE   | /users/my/favorite   | delete favorite user    | au
GET      | /users/my/poems      | get all my poems        | au
GET      | /users/[:id]/profile | get user profile        | nr/au
GET      | /users/my/profile    | get current profile     | au
GET      | /users               | get all users info      | ad
GET      | /users/[:id]         | get user info           | ad
GET      | /users/[:id]/role    | get user role           | ad
DELETE   | /users/[:id]         | delete user profile     | ad
GET      | /poems               | get all poems(tittle)   | nr/au
GET      | /poems/[:id]         | get one poems           | nr/au
GET      | /poems/[:id]/review  | get poem review         | nr/au
POST     | /poems/[:id]/review  | add poem review         | au
DELETE   | /poems/[:id]/review  | delete poem review      | au
POST     | /poems               | add new poems           | au
PUT      | /poems/[:id]         | edit poem               | au
DELETE   | /poems/[:id]         | delete poem             | au
GET      | /roles               | get all roles           | ad
GET      | /roles/[:id]         | get role                | ad
POST     | /login               | login                   | nr
POST     | /signup              | add new user            | nr
N        | /logout              | log out                 | au/ad

