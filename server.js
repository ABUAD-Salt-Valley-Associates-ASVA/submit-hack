const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const readline = require("readline");
const fs = require("fs");
const Multer = require("multer");
const { Readable } = require("stream");
const app = express();

app.use(express.json());
app.use(cors());

class GoogleDriveService {
  static getAuth = () => {
    return new google.auth.GoogleAuth({
      keyFile: `${__dirname}/credentials.json`,
      scopes: "https://www.googleapis.com/auth/drive",
    });
  };

  static getDriveService = () => {
    const auth = GoogleDriveService.getAuth();
    return google.drive({ version: "v3", auth });
  };

  static authenticateGoogle = () => {
    const auth = GoogleDriveService.getAuth();
    google.options({ auth });
    return google;
  };

  static uploadToGoogleDrive = async (file) => {
    const auth = GoogleDriveService.getAuth();
    const fileMetaData = {
      name: file.originalname,
      parents: ["1-zJ9a76cdf8KICbC2hmPSiHonUbGj_MV"],
    };
    const media = {
      mimeType: file.mimeType,
      body: GoogleDriveService.bufferToStream(file.buffer),
    };
    const driveService = google.drive({ version: "v3", auth });
    const response = await driveService.files.create({
      requestBody: fileMetaData,
      media: media,
      fields: "id",
    });
    return response;
  };

  static deleteFile = (filePath) => {
    fs.unlink(filePath, () => {
      console.log("File Deleted");
    });
  };

  static bufferToStream(buffer) {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
  }
}

class MulterFileHandler {
  static getInstance = () => {
    const multer = Multer({
      storage: Multer.memoryStorage(),
      limits: {
        fileSize: 5 + 1024 * 1024,
      },
    });
    return multer;
  };
}

app.post(
  "/upload-file-to-google-drive",
  MulterFileHandler.getInstance().single("file"),
  async (req, res, next) => {
    try {
      const fileUploadResponse = await GoogleDriveService.uploadToGoogleDrive(
        req.file
      );
      res.status(200).json(fileUploadResponse);
    } catch (e) {
      console.log(e);
      res.status(400).json("An error occured");
    }
  }
);

app.listen(3001, () => {
  console.log(`Backend server running on port: 3001`);
});
