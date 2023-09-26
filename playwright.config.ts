import { devices, PlaywrightTestConfig } from "@playwright/test";
import * as path from "path";

const resultsDir = path.resolve("./", "test-results");

const config: PlaywrightTestConfig = {
    timeout: 80 * 1000,
    testDir: "./tests",
    fullyParallel: true,
    expect: { timeout: 7000 },
    projects: [
        {
            name: "chrome",
            use: {
                launchOptions: {
                    args: ["--start-fullscreen"],
                },
                browserName: "chromium",
                ...devices["Desktop Chrome"],
            },
        },
    ],
    use: {
        ignoreHTTPSErrors: true,
        baseURL: "https://amcef.com",
        headless: true,
        viewport: null,
        screenshot: "on",
        video: "off",
        trace: "off",
    },
    retries: 0,
    reporter: [["dot"], ["html", { open: "never" }]],
};

export default config;
