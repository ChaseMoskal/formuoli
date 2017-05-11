
formuoli — act on and collect html form submissions
===================================================

> **this project is an EARLY WORK IN PROGRESS by chase moskal**  
> this toolkit is unstable and open to violent change and i owe you nothing

  + **i'll tell you the secret formula**  
    let's say you have a form on your website for your users to fill out  
    and you want a little server to collect all of the form submissions  
    and you'd like to handle the submissions yourself, maybe fire off some emails  
    and ultimately you'd appreciate a little app to view all submissions or download as a zip  
    and you like typescript and modern tooling  
    *...you came to the right place*  
    `npm install --save formuoli`  

  + **what's not in the formula**  
    formuoli is not involved in html form creation or clientside validation at all  
    you've gotta make your own html form and validate it too  
    then you can pass it to the formuoli node server
    your formuoli server plugins handle submissions however you wish

      - it is a good idea to provide your own formuoli plugin for serverside validation
      - maybe have it complain with 400 errors or whatever

    formuoli is still thinking about file uploads, but hasn't decided on a path for that yet


formuoli node server
--------------------

  + goals and general sketch
    - `formuoli` cli command runs formuoli server straightforwardly
    - works out of the box without configuration, using standard plugins — it just records all submissions to a directory by default, and logs to stout
    - can be easily imported and plugged into your existing express/http server

  + form posts to `/formuoli` engages form handling
    - uses on multiparty or something similar to parse submitted form data
    - plugins parse the submitted form data
    - responds with 200 OK or 500 server error based on what the plugins returned
    - standard plugins may:
      - log to the console for debugging
      - write flat text files to a directory
      - basic serverside validation (don't allow empty submissions, etc)
    - custom plugins can do anything you want, for example:
      - write to an SQL database table
      - fire off email notifications for the admins and also submitters
      - perform advanced serverside validation

  + get requests to `/formuoli` engages browser client app to authenticate and view submissions
    - we'll have to figure a simple auth system to use

  + details and requirements
    - compiles to es2016, thus requires node 6+
    - commonjs


formuoli browser client
-----------------------

  + goals and general sketch
    - simple web app to authenticate with formuoli and view submissions
    - easily importable toolkit makes it easy to send an html form to formuoli
    - example form page allows you to get started right away

  + details and requirements
    - umd modules
    - globalized bundles are available
    - compiles to es5, so older browsers can parse the code
    - uses es2016 libraries, so polyfills for promise, fetch, etc, are required
