export async function postForm(username: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  alert(
    "Bruker med navn" + username + " og passord " + password + " opprettet"
  );
}
