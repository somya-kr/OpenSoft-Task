import Dashboard from "../../../components/dashboard"

export default function Page({ params }: { params: { teamid: string } }){
    return(
    <div style={{textAlign: 'center'}}>
      <h1 style={{margin:'0', padding:'2vw'}}>Team No. {params.teamid}</h1>
      <h2>ZipURL - Where Every Link Finds Its Shortcut</h2>
      <Dashboard/>
    </div>
    )
}