const { When, Then, Given } = require('cypress-cucumber-preprocessor/steps');

Given('Go to web',()=>{
 cy.visit("https://www.youtube.com")
})
Then('Url Is Correct', ()=>{
    cy.url().should('eq','https://www.youtube.com/watch?v=DbxynGpdbac')
   })