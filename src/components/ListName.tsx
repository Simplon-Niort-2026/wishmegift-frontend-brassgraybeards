interface ListNameProps {
    name: string;
};

export default function ListName(props: ListNameProps) {
    return(
        <h2 className="list-name">{props.name}</h2>
    );
};