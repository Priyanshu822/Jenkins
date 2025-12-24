const path = require('path');
const { expect } = require('@playwright/test');


class ContactUsPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.contactUsBtn = 'a[href="/contact_us"]';
        this.getInTouchText = 'text=Get In Touch';
        this.nameInput = 'input[data-qa="name"]';
        this.emailInput = 'input[data-qa="email"]';
        this.subjectInput = 'input[data-qa="subject"]';
        this.messageTextarea = 'textarea[data-qa="message"]';
        this.uploadFileInput = 'input[name="upload_file"]';
        this.submitBtn = 'input[data-qa="submit-button"]';
        this.successMessage = 'b:has-text("Note:")';
        this.homeBtn = 'a[href="/"]';
    }

    async launchApplication() {
        await this.page.goto('https://automationexercise.com');
    }

    async verifyHomePage() {
        await this.page.waitForLoadState('domcontentloaded');
    }

    async clickContactUs() {
        await this.page.click(this.contactUsBtn);
    }

    async verifyGetInTouchVisible() {
        await this.page.waitForSelector(this.getInTouchText);
    }

    async fillContactForm(name, email, subject, message) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.subjectInput, subject);
        await this.page.fill(this.messageTextarea, message);
    }

    async uploadFile(fileName) {
        const filePath = path.resolve('test-data', fileName);
        await this.page.setInputFiles(this.uploadFileInput, filePath);
    }

    async clickSubmit() {
        await this.page.click(this.submitBtn);
    }

    async verifySuccessMessage() {
        await expect(this.page.locator(this.successMessage)).toBeVisible();
    }

    async clickHomeButton() {
        await this.page.click(this.homeBtn);
    }
}

module.exports = ContactUsPage;
