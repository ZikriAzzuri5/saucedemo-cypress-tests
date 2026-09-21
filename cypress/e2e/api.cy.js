describe("API JSONPlaceholder", () => {
  it("GET post by id", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.userId).to.eq(1);
      expect(res.body.id).to.eq(1);
      expect(res.body.title).to.eq(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
      expect(res.body.body).to.eq(
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      );
      expect(res.body).to.have.all.keys("userId", "id", "title", "body");
      expect(res.body.title).to.be.a("string").and.not.be.empty;
    });
  });
  it("POST create post", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.title).to.eq("foo");
      expect(res.body.body).to.eq("bar");
      expect(res.body.userId).to.eq(1);
    });
  });
  it("GET post yang tidak ada mengembalikan 404", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/101",
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
