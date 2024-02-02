import TeamCard from "./team_card"
import '../styles/teambar.scss'

export default function TeamBar(prop: {teams: {team_id: number, team_name: string, team_members: string}[]}){
    return(
        <div className="team-bar">
            { prop.teams.map((team)=>(<TeamCard team_id={team.team_id} team_name={team.team_name} members={team.team_members} />)) }
            { prop.teams.length>0 ? '' : 'You are not in any teams yet'}
        </div>
    )
}