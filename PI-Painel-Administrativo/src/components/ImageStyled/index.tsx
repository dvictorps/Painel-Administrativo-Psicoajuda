import { ImageContainer } from "./styles"

type ImageType = {
    src: string
    alt?: string
}

export function ImageStyled({ src, alt }: ImageType) {
    return (
        <>
            <ImageContainer src={src} alt={alt} />
        </>
    )
}