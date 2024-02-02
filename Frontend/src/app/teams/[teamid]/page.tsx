import Textbox from "../../../components/textbox/textbox"
import History from "../../../components/history"

export default function Page({ params }: { params: { teamid: string } }){
    return(
    <div style={{textAlign: 'center'}}>
      <h1 style={{margin:'0', padding:'2vw'}}>Team No. {params.teamid}</h1>
      <h2>ZipURL - Where Every Link Finds Its Shortcut</h2>
      <Textbox />
      <History agent={'team'} id={0}/>
    </div>
    )
}