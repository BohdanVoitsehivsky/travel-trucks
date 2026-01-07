type PageProps = {
    params: Promise<{ id: string}>;
}

export default async function CamperDetails ({params}: PageProps) {
    const { id } = await params;

    return (
        <main>
            <h1> Camper Details - {id}</h1>
        </main>
    )
}

