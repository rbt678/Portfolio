interface Links{
    name: string, 
    href: string
}

export interface IProject{
    src: string,
    alt: string,
    height: string,
    width: string,
    title: string,
    description: string,
    links: Links[]
}