import TeamBar from "../../components/team_bar";

let teams: {team_id: number, team_name: string, team_members: string}[]= [
  {"team_id":0, "team_name":"My team", "team_members":"ABC, CBD, BCD, HDC"},
  {"team_id":1, "team_name":"My team2", "team_members":"ABC, CBD, BCD, , JCB, HDC"},
  {"team_id":2, "team_name":"My team3", "team_members":"ABC, CBD, BCD, HDC, KCV, KDJDP, KOLKATA KNIght riders, my own name"},
]

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{height:'100%', position: 'relative'}}>
      <TeamBar teams={teams}/>
      {children}
    </div>
  );
}
