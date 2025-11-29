const path = require("node:path");
const fs = require("node:fs/promises");
const fsSync = require("fs");
const { EventEmitter } = require("events");
const event = new EventEmitter();
const filePath = "./data.txt";

// Q1
function logs() {
  console.log({ File: __filename, Dir: __dirname });
}
logs();

// Q2
const pathhes = "/user/files/report.pdf";
function returnFileName(pathhes) {
  return console.log(path.basename(pathhes));
}
returnFileName(pathhes);

// Q3
const collect = { dir: "/folder", name: "app", ext: ".js" };
function build(collect) {
  return console.log(path.normalize(path.format(collect)));
}
build(collect);

// Q4
const extent = "/docs/readme.md";
function exten(extent) {
  return console.log(path.extname(extent));
}
exten(extent);

// Q5
const parrse = "/home/app/main.js";
function Parse(parrse) {
  const { name, ext } = path.parse(parrse);
  return console.log({ Name: name, Ext: ext });
}
Parse(parrse);

// Q6
const abs = "/home/user/file.txt";
function abbs(abs) {
  return console.log(path.isAbsolute(abs));
}
abbs(abs);

// Q7
function joii(...parame) {
  return console.log(path.join(...parame));
}
joii("src", "components", "App.js");

// Q8
function resol() {
  return console.log(path.resolve("./index.js"));
}
resol();

// Q9
function retJoin() {
  return console.log(path.join("/folder1", "folder2/file.txt"));
}
retJoin();

// Q10
const deleteFile = "./async.txt";
async function deleteFiles(deleteFile) {
  try {
    await fs.unlink(deleteFile);
    console.log("This file is deleted");
  } catch (error) {
    console.log({ Error: error });
  }
}
deleteFiles(deleteFile);

// Q11
const destPath = "./data.txt";
async function createFile(destPath) {
  try {
    await fs.writeFile(destPath, "Hello World!", { encoding: "utf-8" });
    console.log("Success");
    const read = await fs.readFile(destPath, { encoding: "utf-8" });
    // ^دي زياده مني بجربها بس😂
    console.log({ read });
  } catch (error) {
    console.log({ Error: error });
  }
}
createFile(destPath);

// Q12
event.on("start", (data) => {
  console.log({ data });
});
event.emit("start", "Welcome event triggered!");

// Q13
const login = "Ahmed";
event.on("login", (login) => {
  console.log(login);
});
event.emit("login", `User logged in:${login}`);

// Q14
const note = "./note.txt";
function readFiles(note) {
  try {
    const result = fsSync.readFileSync(note, { encoding: "utf-8" });
    console.log({ result });
  } catch (Error) {
    console.log({ Error: Error });
  }
}
readFiles(note);

// Q15
const asyncTxt = "./Assync.txt";

async function writeFiles(asyncTxt) {
  try {
    await fs.writeFile(asyncTxt, "Async save ", {
      encoding: "utf-8",
      flag: "a",
    });
    console.log({ resultt });
  } catch (error) {
    console.log({ Error: error });
  }
}
writeFiles(asyncTxt);

// Q16
const notes = "./notes.txt";
if (fsSync.existsSync(notes)) {
  console.log(true);
} else {
  console.log(false);
}

// Q17
//
const os = require("os");
function getSystemInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch(),
  };
}
console.log(getSystemInfo());
