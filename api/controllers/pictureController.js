import Picture from "../models/Picture.js";

export async function create(req, res) {
    try {
        const { name } = req.body;
        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path,
        });
        
        await picture.save();

        res.json({ picture, message: "Image salved successfully"});
    } catch (error) {
        res.status(500).json({message: "Error saving image."});
    }
}

export async function findAll(req, res) {
    try {
        const pictures = await Picture.find();

        res.json(pictures);
    } catch (error) {
        res.status(500).json({ message: "Error when searching for images"});
    }
}