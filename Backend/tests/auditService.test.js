const { auditWebsite } = require("../services/auditService");

describe("Page Pulse Audit Tests", () => {

    // Happy Path
    test("should audit GitHub successfully", async () => {

        const result = await auditWebsite("https://github.com");

        expect(result.status).toBe(200);
        expect(result.title).toBeDefined();
        expect(result.wordCount).toBeGreaterThan(0);

    });

    // Failure Case 1
    test("should throw Invalid URL error", async () => {

        await expect(
            auditWebsite("abcd")
        ).rejects.toThrow("Invalid URL");

    });

    // Failure Case 2
    test("should reject non HTML webpage", async () => {

        await expect(
            auditWebsite("https://api.github.com")
        ).rejects.toThrow(
            "The URL does not point to an HTML webpage."
        );

    });

});