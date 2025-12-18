import { test as base } from '@playwright/test';
import { LOCATORS } from './locators';

export const test = base.extend({
    locators: async ({}, use) => {
        await use(LOCATORS);
    },
});

export const expect = test.expect;
