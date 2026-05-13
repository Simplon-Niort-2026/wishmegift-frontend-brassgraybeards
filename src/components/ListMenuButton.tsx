// Acion to implement
interface ListMenuButtonProps {
    test: React.MouseEventHandler<HTMLElement>;
}

export default function ListMenuButton(props: ListMenuButtonProps) {
    return(
        <button onClick={props.test}>...</button>
    );
}