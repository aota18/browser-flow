'use client'
import useSWR from 'swr';

const fetcher = (args:any) => fetch (args).then((res) => res.json());


export default function Home() {

  const {data, error} = useSWR('http://localhost:8080', fetcher);

  if(error) return <div>Filed to load</div>
  if(!data) return <div>Loading...</div>

  return (
    <div>
      API Exists

       
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi</div>
    </main>
  
    </div>
  )
 
}
