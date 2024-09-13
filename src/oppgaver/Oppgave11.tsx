import { useQuery } from "@tanstack/react-query";
import { fetchRandomName, postFormWithError } from "../utils/postForm";
import { useForm, SubmitHandler } from "react-hook-form";

/* 
  👉 Oppgave: Ta i bruk TanStack Query med React Hook Form.
  - Hint: se https://tkdodo.eu/blog/react-query-and-forms

  - Sett initiell verdi til den første brukeren du henter fra 
  - Passordet må være minst 6 tegn
  - Som bruker ønsker jeg å se en feilmelding om et felt er feil fylt ut

  💡 Bonus-spørsmål: Når bør du bruke zod, og når bør du unngå det?
*/

type Inputs = {
  username: string;
  password: string;
};

export function Oppgave11() {
  const { data } = useQuery({
    queryKey: ["random-name"],
    queryFn: fetchRandomName,
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await postFormWithError(data.username, data.password);
    } catch (e) {
      if (e instanceof Error) {
        setError("root", {
          message: e.message,
        });
      } else {
        setError("root", {
          message: "En ukjent feil oppstod",
        });
      }
    }
  };

  return (
    <div>
      <h1>Oppgave 11 - Zod</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label>
            Brukernavn
            <input
              type="text"
              {...register("username", { required: "Brukernavn er påkrevd" })}
              defaultValue={data?.name}
            />
            {errors.username && (
              <span className="errorMessage">{errors.username.message}</span>
            )}
          </label>
        </div>

        <div>
          <label>
            Passord
            <input
              type="password"
              {...register("password", {
                required: "Passord er påkrevd",
                minLength: {
                  value: 6,
                  message: "Passord må være minst 6 tegn langt",
                },
              })}
            />
            {errors.password && (
              <span className="errorMessage">{errors.password.message}</span>
            )}
          </label>
        </div>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Laster" : "Opprett bruker"}
        </button>
        {errors.root && (
          <span className="errorMessage">{errors.root.message}</span>
        )}
      </form>
    </div>
  );
}
