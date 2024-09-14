import { fetchRandomName, postForm, queryKeyUsers } from "../utils/postForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(1, { message: "Brukernavn er påkrevd" }),
  password: z
    .string()
    .min(6, { message: "Passord må være minst 6 tegn langt" }),
});

type Inputs = z.infer<typeof schema>;

/* 
  👉 Oppgave: Støtt henting av data i bakgrunnen
  - Bruk Controller fra React Hook Form
  - Vis hentet data i feltene med mindre feltet er endret fra klienten

  - Se https://tkdodo.eu/blog/react-query-and-forms

  💡 Bonus-spørsmål: Hvorfor trenger du å bruke Controller, enn å bruke register-funksjonen som før?
*/

export function Oppgave12() {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["random-name"],
    queryFn: fetchRandomName,
  });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: Inputs) =>
      postForm(formData.username, formData.password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyUsers });
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        setError("root", {
          message: error.message,
        });
      } else {
        setError("root", {
          message: "En ukjent feil oppstod",
        });
      }
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div>
      <h1>Oppgave 12 - Controller</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <label>
            Brukernavn
            <input
              type="text"
              {...register("username")}
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
            <input type="password" {...register("password")} />
            {errors.password && (
              <span className="errorMessage">{errors.password.message}</span>
            )}
          </label>
        </div>

        <button disabled={isPending}>
          {isPending ? "Laster" : "Opprett bruker"}
        </button>
        {errors.root && (
          <span className="errorMessage">{errors.root.message}</span>
        )}
      </form>
    </div>
  );
}
