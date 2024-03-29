const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const readline = require("readline");
const fs = require("fs");
const Multer = require("multer");
const { Readable } = require("stream");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
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

  static uploadToGoogleForm = async (data) => {
    const auth = GoogleDriveService.getAuth();
    const googleSheets = google.sheets({
      version: "v4",
      auth: auth.getClient(),
    });
    const spreadsheetId = process.env.SPREADSHEET_ID;
    // const fileMetadata = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadSheetId,
    // });

    // const getRows = await googleSheets.spreadsheets.values.get({
    //   auth,
    //   spreadSheetId,
    //   range: "Sheet1",
    // });

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [data],
      },
    });
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

app.get("/", (req, res) => {
  res.status(200).json("Server Running");
});

app.post(
  "/upload-data-to-google-drive",
  MulterFileHandler.getInstance().single("file"),
  async (req, res, next) => {
    try {
      const body = req.body;
      await GoogleDriveService.uploadToGoogleDrive(req.file);
      const data = [
        body.name,
        body.email,
        body.department,
        body.telephone,
        body.college,
        body.level,
        body.social,
        req.file.originalname,
      ];
      await GoogleDriveService.uploadToGoogleForm(data);
      res.status(200).json("Successful");
    } catch (e) {
      console.log(e);
      res.status(400).json("An error occured");
    }
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server running on port: ${process.env.PORT || 5000}`);
});
