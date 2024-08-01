// features/step-definitions/steps.js
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const login = require('../pageobjects/login.page');

let userData;

Given(/^I fetch login data from the API$/, async () => {
    try {
        userData = await login.fetch(); 
        console.log(userData);
    } catch (error) {
        console.error('ERROR OCCURED WHILE FETCHING DATA-------------------------', error);
    }
    await browser.url('https://demo.applitools.com/index.html');
    await browser.maximizeWindow();
    await browser.pause(1000);
    await $('//input[@id="username"]').setValue(userData.first_name);
    await $("//input[@id='password']").setValue(userData.last_name);
    await $("//a[@id='log-in']").click();
});

When(/^I enter fetched data in login page$/, async () => {
    return true;
});

Then(/^it displays the home page$/, async () => {
     const title = await browser.getTitle();
    expect(title).toBe('Financial Overview'); 
    return true;
});
