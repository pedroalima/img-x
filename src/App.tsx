import { ChangeEvent, useState } from "react"

function App() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedImages = Array.from(e.target.files);
    console.log(selectedImages)
    setImages(selectedImages);
  };

  return (
    <main className="bg-zinc-800 flex justify-center items-center h-screen text-black">
      <div className="bg-white p-10 rounded-xl">
        <h2>Adicionar Imagens</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Imagem ${index + 1}`}
              style={{ maxWidth: '200px', margin: '5px' }}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
