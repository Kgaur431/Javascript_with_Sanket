# MVC

1. mvc is all about setting up the project. 

```
  Example
      when we go to hotel & seat then first we see the MENU & then we give order to WAITER & 
      waiter give order to CHEF & chef make food & give to waiter & waiter give to us.

        Model:- how the things are going to prepare.  (Business Logic)
        Views:- Menu Card (like frontend project)
        Controller:- Waiter (its duty to receive the req from user & pass it on Models.) just re-route the req to the models. 

        View -> Controller -> Model -> Controller -> View

          View can be multiple like Mobile, Tablet, Laptop ... so we can't upload the android code in NodeJS and so on. 

we are prepare API Based Backend 
    if we put MVC in same project repository then these views are build on backend 
      suppose if we have android app then we can't have it it Node.js
      so we need to put the android app frontend (View) in different repository
  
  then how it can interact with the controller 
  ```
so in API Based backend we not build views only Model & Controllers 

```
  req --> Controller -->    --> Model --> Databases
  frist req hit the Controller
 we have service layer (where actual business logic is defined)
 we have Models 
 on the Model Layer we have one more layer called Repository Layer which is responsible for interacting with the database
      Reposiory Layer just interact with db. like where we write sql queries, ORM. 
  Usecase:- 
      1. Model is identity that how one row of RDBMS look like 
          like:- if we store the user then what all information about the user/product should be stored in the database that will descide by Model
  
  In Terms of OOP's 
      1. there is an class that resides in the Model Layer
      2. class structure is signify that how product will look like.  
          we can create some fun in class like create a user, update a user ... 
          these all fun are reside in the Repository Layer.
  
  Imp:- Flexible MVC. 
      if we check the MVC architecture then all the responsiblity of business logic is reside in Model Layer
        but JAVA, NODE.js ... they provide some flexiblity where 
                                                            service + Model + Repository = Big Model. it means all the business logic are behind controllers. 
        now at Service Layer, we do validation, ML algorithm, call some other service like payment services.  
              Repository Layer will interact with db & it have the Models.
              Model Layer define how the structure of db look like.
                  means How the data will look in the database that written in db. 
      
      In Ruby ON Rails, .Net ... all of the things written inside Model. 