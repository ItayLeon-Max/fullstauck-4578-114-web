import './Header.css';
export default function Header(props:{title:string, style:object, withQuotes?:boolean}) {
    if(props.withQuotes){
        return (
            <div className="header" style={props.style}>
                <h1>"{props.title}"</h1>
            </div>
        )
    } else {
        return (
            <div className="header" style={props.style}>
                <h1>{props.title}</h1>
            </div>
        )
    }
}