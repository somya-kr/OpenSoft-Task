export default function HistoryURL(props: {url:string, shortened_url: string}){
    return(
        <div className="history-url">
        <h3>{props.url}</h3>
        <p>{props.shortened_url}</p>
        </div>
    );
}