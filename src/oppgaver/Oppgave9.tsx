import { postFormWithError } from "../utils/postForm";
import { useForm, SubmitHandler } from "react-hook-form";

/* 
  Oppgave: Bruk heller biblioteket Zod til å validere.
  - Hint: se https://dev.to/majiedo/using-zod-with-react-hook-form-using-typescript-1mgk

  - Ingen av feltene kan være tomme
  - Passordet må være minst 6 tegn
  - Som bruker ønsker jeg å se en feilmelding om et felt er feil fylt ut
*/

type Inputs = {
  username: string;
  password: string;
};

export function Oppgave9() {
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
      <h1>Oppgave 9 - Zod</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label>
            Brukernavn
            <input
              type="text"
              {...register("username", { required: "Brukernavn er påkrevd" })}
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
