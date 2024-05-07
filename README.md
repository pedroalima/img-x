# Portfólio

Desenvolvi uma aplicação para upload de imagens. 

A página web foi inspirada em outras aplicações já existentes, adaptando seus designs e recursos. Utilizei tecnologias como TypeScript, React, MongoDB, TailwindCSS e CSS no desenvolvimento da aplicação.

## Índice

- [Screenshots](#screenshots)
- [Objetivos](#objetivos)
- [Minha caminhada](#minha-caminhada)
  - [Propriedades e Tecnologias](#propriedades-e-tecnologias)
  - [Meu aprendizado](#meu-aprendizado)
- [Rodando o projeto](#rodando-o-projeto)
- [Autor](#autor)

</br>

## Screenshots

![#](./public/desktop-view.png)

</br>

## Objetivos

O principal objetivo deste projeto foi praticar a manipulação de arquivos de imagens em formulários.

 Os usuários têm a capacidade de: 
- Armazenar arquivos de imagens na aplicação.

</br>

## Minha caminhada

- [x] Criação do servidor e conexão com banco de dados (MongoDB)
- [x] Configuração da biblioteca Multer e definições de rotas para adicionar, criar e deletar imagens no servidor
- [x] Deploy do servidor
- [x] Criação do layout e implementação dos serviços de adicionar, criar e deletar no front-end
- [x] Deploy do front-end

</br>

## Propriedades e Tecnologias

- TypeScript
- React
- Vite
- TailwindCSS
- CSS
- Node
- Express
- Mongoose
- MongoDB
- Multer
- CORS

</br>

  ## Meu aprendizado

Para trabalhar com upload de arquivos o express precisa de um middleware chamado Multer, que permite manipular dados multipart/form-data, que no pode ser definido aplicando a pripriedade "encType", na criação do formulário HTML.

```tsx
<form 
    onSubmit={handleUploadImage} 
    encType="multipart/form-data" 
    className="bg-white p-10 rounded-xl flex gap-8 flex-col justify-center items-center"
    >
    <h2 
        className="text-2xl"
    >Nos envie uma imagem</h2>

    <input
        type="file"
        accept="image/*"
        multiple
        name="image"
        onChange={handleChangeImage}
    />

    <button 
        type="submit" 
        className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-4 rounded-2xl"
    >Enviar</button>
</form>
```

 <!-- Ao definir cada esquema, é necessário criar e exportar o modelo correspondente. Dessa forma, tudo está pronto para ser aplicado em cada rota.

```tsx
import connectToDatabase from "@/database";
import Home from "@/models/Home";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const extractData = await req.json();
        const saveData = await Home.create(extractData);

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: "Data saved successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong! Please try again",
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something goes wrong! Please try again",
        });
    }
}
```

Veja mais detalhes na documentação oficial [aqui](https://mongoosejs.com/docs/guide.html)
</br>

## Rodando o projeto

![#](./public/desktop.gif)

### Acesse a aplicação via web [aqui!](https://portifolio-pedroalima.vercel.app/)

#### Ou instale na sua máquina. Para conferir a versão final, é só realizar os seguintes passos:

### 1 - Clonando o Projeto:
Navegue até o diretório onde deseja clonar o projeto. Abra o terminal com o GitBash e execute o comando:

```bash
git clone URL_DO_REPOSITORIO
```
Substitua URL_DO_REPOSITORIO pela URL do repositório deste projeto.

#### 2 - Instalando Dependências:
Navegue até a pasta clonada do projeto e execute o comando no terminal:

```bash
npm install
```
ou
```bash
yarn install
```

#### 3 - Executando o Projeto:
Ainda na pasta do projeto, execute o comando no terminal:

```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento Next.

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/) -->