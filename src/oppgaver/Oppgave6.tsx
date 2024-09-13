import { postForm } from "../utils/postForm";
import { useForm, SubmitHandler } from "react-hook-form";

/*
  Oppgave: Legg til validering av input-feltene.
  - Ingen av feltene kan være tomme
  - Passordet må være minst 6 tegn
  - Som bruker ønsker jeg å se en feilmelding
*/

type Inputs = {
  username: string;
  password: string;
};

export function Oppgave6() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await postForm(data.username, data.username);
  };

  return (
    <div>
      <h1>Oppgave 6</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label>
            Brukernavn
            <input type="text" {...register("username")} />
          </label>
        </div>

        <div>
          <label>
            Passord
            <input type="password" {...register("password")} />
          </label>
        </div>

        <button>Opprett bruker</button>
      </form>
    </div>
  );
}
