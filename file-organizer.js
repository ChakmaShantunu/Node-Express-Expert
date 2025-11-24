const fs = require("fs");
const path = require("path");

const sourdeDir = path.join(__dirname, 'output', "messy-files");
const organizedDir = path.join(__dirname, 'output', 'organized');

const categories = {
    images: [".jpg", ".jpeg", ".png", ".svg", ".gif", ".webp"],

    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt", ".ppt", ".pptx"],

    videos: [".mp4", ".mkv", ".mov", ".avi", ".wmv", ".flv", ".webm"],

    audio: [".mp3", ".wav", ".aac", ".flac", ".ogg", ".m4a"],

    code: [".js", ".ts", ".jsx", ".tsx", ".html", ".css", ".json", ".py", ".java", ".c", ".cpp", ".cs", ".php", ".rb", ".go"],

    archives: [".zip", ".rar", ".7z", ".tar", ".gz"],

    spreadsheets: [".xls", ".xlsx", ".csv", ".ods"],

    others: []
};

const testFiles = [
    "profile.jpg",
    "cover.png",
    "document.pdf",
    "resume.docx",
    "video.mp4",
    "song.mp3",
    "script.js",
    "app.ts",
    "archive.zip",
    "data.xlsx",
    "notes.txt",
    "presentation.pptx",
    "logo.svg",
    "movie.mkv",
    "audio.wav",
    "backup.rar",
    "report.csv",
    "unknown.xyz",
    "random.xyz",
    "nodejs.zip",
];

function initializeDirectories() {
    if (!fs.existsSync(sourdeDir)) {
        fs.mkdirSync(sourdeDir, { recursive: true });

        testFiles.forEach(file => {
            fs.writeFileSync(path.join(sourdeDir, file), `Content of ${file}`);
        });
    }

    console.log("Messy directories files are created");

    if (!fs.existsSync(organizedDir)) {
        fs.mkdirSync(organizedDir, { recursive: true });
    }

    Object.keys(categories).forEach(category => {
        const categoryPath = path.join(organizedDir, category);
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath);
        }
    });
}

function getCategory(fileName) {
    const ext = path.extname(fileName).toLowerCase();
    for(const [category, extensions] of Object.entries(categories))
    {
        if(extensions.includes(ext)) {
            return category;
        }
    }

    return "others";
}

// initializeDirectories();

