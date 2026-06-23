interface ImageContainerProps {
    source: string;
    description?: string;
};

export default function addImageContainer(props: ImageContainerProps) {
    return(
        <img src={props.source} alt={props.description}/>
    );
};
