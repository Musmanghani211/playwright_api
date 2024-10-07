import { test, expect } from "@playwright/test";

test("API Delete method", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");

  expect(response.status()).toBe(204);
});

test("API PUT method", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "morpheus",
      job: "zion resident",
    },
  });
  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("morpheus");
  console.log(await response.json());
});

test("API post method", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "morpheus",
      job: "leader",
    },
  });
  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("morpheus");
  console.log(await response.json());
});

test("API get request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("janet");

  console.log(await response.json());
});
