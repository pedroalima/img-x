import { ChangeEvent, useState } from "react"

function App() {
  const [images, setImages] = useState<FileList | null>(null);

  async function addPicture(formData: FormData) {
    try {
        const res = await fetch("http://localhost:8080/pictures/", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedImages = e.target.files;
    setImages(selectedImages);
  };

  const handleUploadImage = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(images);

    if(images) {
      const formData = new FormData();
      Array.from(images).forEach((image, index) => {
        formData.append(`image${index}`, image);
      });

      await addPicture(formData);
    }
  };

  return (
    <main className="bg-zinc-800 flex justify-center items-center h-screen text-black">
      <form onSubmit={handleUploadImage} className="bg-white p-10 rounded-xl flex gap-8 flex-col justify-center items-center">
        <h2 className="text-2xl">Nos envie uma imagem</h2>

        <input
          type="file"
          accept="image/*"
          multiple
          name="images"
          onChange={handleImageChange}
        />

        {images && !!images.length && (
          <div className="flex flex-col gap-2">
            {[...images].map((image, index) => (
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
