

export async function addPicture(File: { name: string}) {
    try {
        const res = await fetch("/", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(File)
        })

        if(!res.ok) {
            throw new Error("Error sending image")
        }

        return res.json();

    } catch (error) {
        console.log("Error: ", error)
    }
}