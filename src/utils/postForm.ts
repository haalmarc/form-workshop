export async function postForm(username: string, password: string) {
  await new Promise((resolve) => setTimeout(() => resolve, 2000));

  alert(
    "Bruker med navn" + username + " og passord " + password + " opprettet"
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function postFormWithError(username: string, password: string) {
  await new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Brukernavn allerede i bruk")), 2000)
  );
}
