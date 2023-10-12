//your code here
() => {
  cy.visit(baseUrl + "/main.html");
  cy.get("div").then(span => {
    const text = span.text().trim();
    expect(text).to.eq("Welcome to the world of Web development");
  });
}
