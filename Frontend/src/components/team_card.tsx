import Link from "next/link";

export default function TeamCard(prop: {team_id: number, team_name:string, members:string}){
    return(
        <div className="team-card">
            <Link href={'/teams/'+prop.team_id} className="link">
            <h2>{prop.team_name}</h2>
            <p>{ prop.members }</p>
            </Link>
        </div>
    );

}


