import { apiBaseUrl } from "./config/config";

export async function userLogin(loginObject) {
  const response = await fetch(`${apiBaseUrl}/users/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(loginObject),
  });
  const profile = await response.json();
  return profile;
}

export async function getAllProblems() {
  const response = await fetch(`${apiBaseUrl}/problems`);
  const problems = await response.json();
  return problems;
}

export async function getSingleProblem(id) {
  const response = await fetch(`${apiBaseUrl}/problems/${id}`);
  const problem = await response.json();
  return problem;
}

export async function problemPost(newProblem) {
  await fetch(`${apiBaseUrl}/problems`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newProblem),
  });
}

export async function problemEdit(editedProblem) {
  await fetch(`${apiBaseUrl}/problems`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedProblem),
  });
}

export async function problemDelete(id) {
  await fetch(`${apiBaseUrl}/problems/${id}`, {
    method: "DELETE",
  });
}

export async function getAllUsers() {
  const response = await fetch(`${apiBaseUrl}/users`);
  const users = await response.json();
  return users;
}
