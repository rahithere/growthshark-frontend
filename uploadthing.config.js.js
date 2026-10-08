import { createUploadthing } from "uploadthing";

export const uploadRouter = {
  resumeUploader: createUploadthing({
    fileTypes: ["pdf", "doc", "docx"],
    maxFileSize: "4MB",
  }).onUploadComplete(async ({ file }) => {
    console.log("File uploaded:", file.url);
  }),
};