interface RouterContent {
    asPath: string
}

interface Router {
    router: RouterContent
}


export default function HeaderButton() {
    return (
        <div className={"header-button"}>Consultá ahora</div>
    )
}