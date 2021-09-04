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

export async function problemEdit(newProblem) {
  const response = await fetch(`${apiBaseUrl}/problems`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newProblem),
  });
  const edit = await response.json();
  return edit;
}

export async function problemEdit(editedProblem) {
  const response = await fetch(`${apiBaseUrl}/problems`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editedProblem),
  });
  const edit = await response.json();
  return edit;
}

export async function userLogin(id) {
  const response = await fetch(`${apiBaseUrl}/problems/${id}`, {
    method: "DELETE"
  });
  const remove = await response.json();
  return remove;
}

