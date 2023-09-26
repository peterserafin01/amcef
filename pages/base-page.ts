import { Page } from "@playwright/test";

type MenuItems = "O nás" | "Služby" | "Referencie" | "Blog" | "Kariéra" | "Kontakt";

type ContactForm = {
    "Meno a priezvisko": string;
    "Názov spoločnosti": string;
    "Email": string;
    "Tel. číslo": string;
    "Povedzte nám niečo o vašom projekte": string;
    "Súhlasím so spracovaním osobných údajov za účelom kontaktovania."?: "Áno" | "Nie";
    "Súhlasím so spracovaním osobných údajov na marketingové účely."?: "Áno" | "Nie";
    "Priložiť súbor"?: string;
};

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigujDo(link?: string): Promise<void> {
        const targetURL = link ? link : "";
        await this.page.goto(targetURL);
    }

    async vyperPolozkyMenu(item: MenuItems, subItem?: string): Promise<void> {
        const menuItem = this.page.getByRole("link", { name: item });
        if (subItem) {
            await menuItem.click();
            await this.page.getByRole("link", { name: subItem }).click();
        }
        await menuItem.click();
    }

    async vyplenieUdajovKontaktnehoFormulara(data: ContactForm): Promise<void> {
        for (const [key, value] of Object.entries(data)) {
            let input = this.page.getByLabel(key);
            if ((await input.getAttribute("type")) == "checkbox" && value == "Áno") {
                await input.check();
            } else {
                await this.page.getByLabel(key).fill(value);
            }
        }
    }
}
