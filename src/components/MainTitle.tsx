interface TitleProps {
    title: string;
}

export default function MainTitle(props: TitleProps) {
    return(
        <h1 className="mainTitle">{props.title}</h1>
    );
}