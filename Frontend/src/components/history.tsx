import HistoryURL from "./history_url"
import '../styles/history.scss'

export default function History(props: { agent:'user'|'team', id: number}){
    return(
        <div className="history">
            <p>{props.agent=="user"? "User URLs" : "Team URLs"}</p>
            <div>
                <HistoryURL url='www.google.com' shortened_url='hello.com/000a'/>
                <HistoryURL url='https://youtu.be/dQw4w9WgXcQ?si=eAYt3-m4lQ3gJSHl' shortened_url='hello.com/000b'/>
                <HistoryURL url='www.google.com' shortened_url='hello.com/000c'/>
                <HistoryURL url='https://www.google.com/search?client=firefox-b-d&q=how+to+center+a+div' shortened_url='hello.com/000d'/>
                <HistoryURL url='www.google.com' shortened_url='hello.com/000e'/>
            </div>
        </div>
    );
}