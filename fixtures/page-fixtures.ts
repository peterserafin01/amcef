import { test as baseTest } from "@playwright/test";
import { BasePage } from "../pages/base-page";

type pages = {
    basePage: BasePage;
};

const testPages = baseTest.extend<pages>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
});

export const test = testPages;
export const expect = testPages.expect;
