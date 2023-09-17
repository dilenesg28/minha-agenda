import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

async function carregarDados(){
 
  //const url = "https://holidays.abstractapi.com/v1/?api_key=b0b39b61cae04c89823f6c8565402678&country=US&year=2020&month=12&day=25" 
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {
  
  const filmes = await carregarDados()

  return (
    <>
      <nav className="flex items-end gap-4 bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Filmes</h1>
        <a href="/favoritos">favoritos</a>
      </nav>

      <Titulo>em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>lançamentos</Titulo>

    </>
  )
}