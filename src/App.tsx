import { ChangeEvent, useState } from "react"

function App() {
  const [images, setImages] = useState<FileList | null>(null);

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;

    if (files) {
      setImages(files)
    }
  };

  async function addPicture(formData: FormData) {
    try {
        const res = await fetch("https://api-img-x.vercel.app/pictures", { 
            method: "POST",
            body: formData
        })

        if(!res.ok) {
            throw new Error("Error sending image")
        }

        return res.json();

    } catch (error) {
        console.log("Error: ", error)
    }
  }

  const handleUploadImage = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(images);

      const formData = new FormData();

      if (images) {
        for (let i = 0; i < images.length; i++) {
          formData.append("image", images[i]);
        }
      }

      await addPicture(formData);
  };

  return (
    <main className="bg-zinc-800 flex justify-center items-center h-screen text-black">
      <form onSubmit={handleUploadImage} encType="multipart/form-data" className="bg-white p-10 rounded-xl flex gap-8 flex-col justify-center items-center">
        <h2 className="text-2xl">Nos envie uma imagem</h2>

        <input
          type="file"
          accept="image/*"
          multiple
          name="image"
          onChange={handleChangeImage}
        />

        <button type="submit" className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded-2xl">Enviar</button>
      </form>
    </main>
  )
}

export default App
