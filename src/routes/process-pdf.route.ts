import { Router } from "express";
import multer from "multer";
import { processPdf } from "../pipelines/process-pdf.js";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/process-pdf", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }

    const json = await processPdf(file.buffer);

    return res.json({
      success: true,
      markdown: json.markdown,
      title: json.title,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to process PDF",
    });
  }
});

export default router;
