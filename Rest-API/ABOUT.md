## API 

### CREATE RESOURCE 
  1. URL   : url/resources          // use Plural resource name
  2. Method   : POST
  3. Data : data will be send by body parameters in the form of JSON object
          {
            "name" : "value",
            "name" : "value"
          }

  Example
          url/blogs

### READ RESOURCE
A. Read all resources
  1. URL  : url/resources 
  2. Method : GET

    Example
          url/blogs

B. Read single resource
  1. URL  : url/resources/:id
  2. Method : GET

    Example
          url/blogs/:id     ==> : means variable value || dynamic value of the resource 
            url/blogs/1     ==> 1 is the value of id
            url/blogs/2     ==> 2 is the value of id
        
### UPDATE RESOURCE
1. URL  : url/resources/:id
2. Method : PUT/PATCH 
            PUT ==> update all the fields of the resource                           FULL UPDATE
            PATCH ==> update only the fields which are send in the request body     PARTIAL UPDATE
3. Data : 
          {
            "name" : "value",
            "name" : "value"
          }

  Example
        url/blogs/:id     ==> : means variable value || dynamic value of the resource

### DELETE RESOURCE
1. URL  : url/resources/:id
2. Method : DELETE

  Example
        url/blogs/:id     ==> : means variable value || dynamic value of the resource 


### TYPES OF PARAMS
  1. Query Params
       Example
              ?name=value
              ?name=value&name=value
            url ==> http://localhost:3000/blogs?sortBy=name&limit=10

      Uses of query parameters
        1. Filtering
            Example 
                  http://localhost:3000/blogs?sortBy=name
        2. Sorting
            Example 
        3. Pagination


  2. Route Params
      Example
            url ==> http://localhost:3000/blogs/:id
                  url ==> http://localhost:3000/blogs/1
                  url ==> http://localhost:3000/blogs/2
                  url ==> http://localhost:3000/blogs/3

      Uses of Route parameters
        1. Get single resource
        2. Update single resource
        3. Delete single resource

  3. Body Params
      Example
            url ==> http://localhost:3000/blogs
            data ==> {
                        "name" : "value",
                        "name" : "value"
                      }

      Uses of Body parameters
        1. Create resource
        2. Update resource








## POINTS TO REMEMBER
  1. in url if see the % that means instead of space separated, it will be replaced with  %. 
  2. Hot Reloadinng : when we make changes in the code, it will automatically reflect in the browser without refreshing the page.
       install some packages for hot reloading
        npm install -g nodemon
        nodemon app.js ==> execute this command in terminal 
              if we execute this command then termianl will through an error that "command not found" because OS does not know about this command we have to execute it in Node Environment for that we have to do 
              npx nodemon app.js
                 ||
              install nodemon package globally but its not recommended 
              npm install -g nodemon
                ||
              put in package.json file 
                "scripts": {
                  "start": "npx nodemon app.js"
                }
                npm start
               
      In the latest version of Node, Hot Reloadinng feature is enabled. 
  3.  Why we need to install body parser in Express server
        npm install body-parser

          what is body-parser
              body-parser is a middleware which is used to parse the data from the body. when we send the post request or put request. 

          How can we configure body parser?
            using this middleware we can configure the body parser.  
  4. Middleware
      when we send the req to the api, before we receive the req in the api, api we can put additional layer of logic before actually hit the server. 
        logics:-
            1. weather someone send correct data or not
      these layers are middleware. 
        app.use(bodyparser.json())   ==> this is the middleware in express server 
          now we able to parse the data in JSON. not able to read thed data. 
        app.use(bodyparser.urlencoded({extended: true}))   ==> this is the middleware in express server 
          means it read the data from the body. 
          this fun takes obj as an argument which has a property extended  as true. 

        like 
            app.use(bodyparser.urlencoded({extended: true}
            app.use(bodyparser.json()) 