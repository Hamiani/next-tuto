import { getSession } from "next-auth/react";

export default function Dashboard() {
  return <div className="p-4">Bienvenue sur ton dashboard !</div>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
