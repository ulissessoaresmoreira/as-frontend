import { AdminPage } from "@/components/admin/AdminPage";
import { redirect } from "next/navigation";

const Page = () => {

  // AQUI VAI ENTRAR A FUNÇÃO QUE VAI VERIFICAR SE ESTÁ LOGADO
  // const logged = await.pingAdmin();
  // if (!logged) return redirect ('/admin/login');


  return <AdminPage />;
}

export default Page;