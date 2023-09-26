import { expect, test } from "../fixtures/page-fixtures";

//test.use({ headless: false });

test("Preklikanie položiek v menu", async ({ page, basePage, baseURL }) => {
    test.info().annotations.push({
        type: "Test",
        description: "",
    });
    await test.step("Zobrazená domovská stránka AMCEF", async () => {
        await basePage.navigujDo();
    });
    await test.step("Používateľ zobrazí sekciu: O nás", async () => {
        await basePage.vyperPolozkyMenu("O nás");
        await expect.soft(page).toHaveURL(`${baseURL}/o-nas/`);
        await expect.soft(page).toHaveTitle("O nás | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Služby - Digitalizácia podnikov", async () => {
        await basePage.vyperPolozkyMenu("Služby", "Digitalizácia podnikov");
        await expect.soft(page).toHaveURL(`${baseURL}/service/digitalizacia-podnikov/`);
        await expect.soft(page).toHaveTitle("Služby | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Služby - Softvér na mieru", async () => {
        await basePage.vyperPolozkyMenu("Služby", "Softvér na mieru");
        await expect.soft(page).toHaveURL(`${baseURL}/service/softver-na-mieru/`);
        await expect.soft(page).toHaveTitle("Služby | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Služby - Prenájom IT špecialistov", async () => {
        await basePage.vyperPolozkyMenu("Služby", "Prenájom IT špecialistov");
        await expect.soft(page).toHaveURL(`${baseURL}/service/prenajom-it-specialistov/`);
        await expect.soft(page).toHaveTitle("Služby | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Referencie", async () => {
        await basePage.vyperPolozkyMenu("Referencie");
        await expect.soft(page).toHaveURL(`${baseURL}/referencie/`);
        await expect.soft(page).toHaveTitle("Referencie | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Blog", async () => {
        await basePage.vyperPolozkyMenu("Blog");
        await expect.soft(page).toHaveURL(`${baseURL}/blog/`);
        await expect.soft(page).toHaveTitle("Blog | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Kariéra", async () => {
        await basePage.vyperPolozkyMenu("Kariéra");
        await expect.soft(page).toHaveURL(`${baseURL}/kariera/`);
        await expect.soft(page).toHaveTitle("Kariera | AMCEF");
    });
    await test.step("Používateľ zobrazí sekciu: Kontakt", async () => {
        await basePage.vyperPolozkyMenu("Kontakt");
        await expect.soft(page).toHaveURL(`${baseURL}/kontakt/`);
        await expect.soft(page).toHaveTitle("Kontakt | AMCEF");
    });
});

test("Vyplnenie kontaktného formulára - bez odoslania", async ({ page, basePage }) => {
    test.info().annotations.push({
        type: "Test",
        description: "",
    });
    await test.step("Zobrazená domovská stránka AMCEF", async () => {
        await basePage.navigujDo();
    });
    await test.step("Používateľ zobrazí sekciu: O nás", async () => {
        await basePage.vyperPolozkyMenu("Kontakt");
    });
    await test.step("Používateľ vyplní údaje kontaktného formulára", async () => {
        await basePage.vyplenieUdajovKontaktnehoFormulara({
            "Meno a priezvisko": "Janko Hráško",
            "Názov spoločnosti": "AMCEF",
            "Email": "amcef@gmail.com",
            "Tel. číslo": "+42190123456",
            "Povedzte nám niečo o vašom projekte": "...",
            "Súhlasím so spracovaním osobných údajov na marketingové účely.": "Áno",
            "Súhlasím so spracovaním osobných údajov za účelom kontaktovania.": "Áno",
        });
    });
});
