import { FC } from "react"

interface SwaggerContainerProps{
    url: string
}

export const SwaggerContainer:FC<SwaggerContainerProps> = ({url}:SwaggerContainerProps) => {
    return(
        <>
        {url}
        </>
    )
}