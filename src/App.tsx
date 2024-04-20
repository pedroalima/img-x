import { useState } from "react"


function App() {
  const [ images, setImages ] = useState([])

  const handleImageChange = (e) => {
    const imgFile = Array.from(e.target.files)

    setImages(imgFile)
  }

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
