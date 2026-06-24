
interface BtnPrivateMessageProps {
    title: string ;
    onClick?: () => void;
}

export default function BtnPrivateMessageProps(props: BtnPrivateMessageProps){
    return (
        <button onClick={props.onClick}>{props.title}</button>
    );
}

