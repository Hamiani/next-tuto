import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) router.push("/dashboard");
    else alert("Identifiants incorrects");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-md mx-auto"
    >
      <h1 className="text-2xl font-bold">Connexion</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Mot de passe"
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded">
        Se connecter
      </button>
    </form>
  );
}
