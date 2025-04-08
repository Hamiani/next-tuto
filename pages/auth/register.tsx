import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("/api/register", { name, email, password });
    router.push("/auth/login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-md mx-auto"
    >
      <h1 className="text-2xl font-bold">Inscription</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Mot de passe"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        S&apos;inscrire
      </button>
    </form>
  );
}
