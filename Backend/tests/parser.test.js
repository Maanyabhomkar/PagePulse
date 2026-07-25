const { parseHTML } = require("../utils/parser");

const html = `
<html>
<head>
    <title>My Website</title>
    <meta name="description" content="This is my website">
</head>
<body>
    <h1>Welcome</h1>
    <h1>About</h1>
    <p>Hello world from Page Pulse</p>
</body>
</html>
`;

test("Extract title from HTML", () => {
    const result = parseHTML(html);
    expect(result.title).toBe("My Website");
});

test("Extract description from HTML", () => {
    const result = parseHTML(html);
    expect(result.description).toBe("This is my website");
});

test("Count H1 tags", () => {
    const result = parseHTML(html);
    expect(result.h1Count).toBe(2);
});

test("Count words", () => {
    const result = parseHTML(html);
    expect(result.wordCount).toBeGreaterThan(0);
});