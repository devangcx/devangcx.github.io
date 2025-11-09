interface ImageProps {
    src: string;
    alt: string;
    caption: string;
}

export default function Image({ src, alt, caption }: ImageProps) {
    return (
        <figure>
            <img src={src}
                alt={alt} />
            <figcaption>{caption}</figcaption>
        </figure>
    );
}