Feature: Acount Login SwagLabs for example

    Background: Preconditions 
        Given User visit SwagLabs page

    Scenario Outline: Cucumber | TC1 Verify the Login Correctly
        When The user enters username as '<username>' and passsword as '<password>' 
        When clicks on login button
        Then it will enter to the home page 
    Examples:
    |username|password|   
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|     
    |performance_glitch_user|secret_sauce|    

     Scenario Outline: Cucumber | TC2 Verify the Login with invalid credentials
        When The user enters username as '<username>' and passsword as '<password>' 
        When clicks on login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    Examples:
    |username|password|   
    |standard_user313|secret_sauce|
    |problem_user|secret_sauce313|     
    |performance_glitch_user313|secret_sauce| 
