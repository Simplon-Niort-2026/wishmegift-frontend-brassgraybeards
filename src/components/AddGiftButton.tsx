// Action to implement
interface AddGiftButtonProps {
    caption: string;
    // Action need to receive an arrowed function (and may receive parameters)
    action: React.MouseEventHandler<HTMLElement>;
};

export default function AddGiftButton(props: AddGiftButtonProps) {
    return(
        <button type="button" onClick={props.action}>{props.caption}</button>
    );
};