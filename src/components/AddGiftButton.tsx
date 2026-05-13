// Action to implement
interface AddGiftButtonProps {
    caption: string;
    action: React.MouseEventHandler<HTMLElement>;
};

export default function AddGiftButton(props: AddGiftButtonProps) {
    return(
        <button type="button" onClick={props.action}>{props.caption}</button>
    );
};