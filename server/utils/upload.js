import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url: "mongodb+srv://user:Pranay2329@prohub.xqthg.mongodb.net/Prohub?retryWrites=true&w=majority",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    file: (request, file) => {
        const match = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

        if (match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
            // return filename;
        }
        

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage });