const { isValidUrl } = require("../utils/validator");

test("Valid URL", () => {
    expect(isValidUrl("https://github.com")).toBe(true);
});

test("Invalid URL", () => {
    expect(isValidUrl("hello")).toBe(false);
});