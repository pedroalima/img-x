import { ChangeEvent, useState } from "react"

function App() {
  const [images, setImages] = useState<File[]>([]);

  const handleUploadImage = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(images)
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  return (
    <main className="bg-zinc-800 flex justify-center items-center h-screen text-black">
      <form onSubmit={handleUploadImage} className="bg-white p-10 rounded-xl flex gap-8 flex-col justify-center items-center">
        <h2 className="text-2xl">Nos envie uma imagem</h2>

        {!images.length && (
            <input
            type="file"
            accept="image/*"
            multiple
            name="images"
            onChange={handleImageChange}
          />
        )}

        {!!images.length && (
          <div className="flex flex-col gap-2">
            {images.map((image, index) => (
              <div key={index} className="rounded-xl border-2 border-slate-800">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Imagem ${index + 1}`}
                  style={{ maxWidth: '200px', margin: '5px' }}
                />
              </div>
            ))}
          </div>
        )}

        <button type="submit" className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded-2xl">Enviar</button>
      </form>
    </main>
  )
}

export default App
