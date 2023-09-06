import Card from "@/app/componentes/Card";
import Titulo from "@/app/componentes/Titulo";
/*
import Image from 'next/image'
export default function Home() {
  return (//JSX
    <>
      <nav className="bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Minha agenda</h1>
      </nav>

    </>    
  )
}
*/

export default function Home() {
  //mock
  const filmes = [
    {
      id: 1,
      titulo: "Independência do Brasil",
      nota: 9.5,
      poster: "https://wordpress-direta.s3.sa-east-1.amazonaws.com/sites/860/wp-content/uploads/2022/09/05111601/7-de-setembro-2022-site.jpg"
    },
    {
      id: 2,
      titulo: "Proclamação da República",
      nota: 9.0,
      poster: "https://s.calendarr.com/upload/55/fe/proclamacao-da-republica.jpg?auto_optmize=low"
    }
  ] 


  return (
    <>
      <nav className="bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Minha agenda</h1>
      </nav>

      <Titulo>Próximos</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <Card filme={filme} /> )}
      </section>

      <Titulo>Agendar</Titulo>

    </>
  )
}


