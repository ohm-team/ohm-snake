const requestFileSystem = (window as any).requestFileSystem || (window as any).webkitRequestFileSystem;
requestFileSystem((window as any).TEMPORARY, 5 * 1024 * 1024 /*5MB*/, onInitFs, errorHandler);
let fs;

function onInitFs(createdFs) {
  fs = createdFs;
  console.log('Opened file system: ' + fs.name);
}

function errorHandler(e) {
  console.log('Error: ', e);
}

export const createFile = async (blob) => {
  return new Promise((resolve, reject) => {
    fs.root.getFile(
      'log.txt',
      { create: true, exclusive: false },
      function (fileEntry) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(
          function (fileWriter) {
            fileWriter.onwriteend = function (e) {
              console.log('Write completed.');
            };

            fileWriter.onerror = function (e) {
              console.log('Write failed: ' + e.toString());
            };

            fileWriter.write(blob);
            resolve(blob);
          },
          (e) => reject(e)
        );
      },
      (e) => reject(e)
    );
  });
};

export const readFile = async () => {
  return new Promise((resolve, reject) => {
    fs.root.getFile(
      'log.txt',
      {},
      function (fileEntry) {
        fileEntry.file(
          function (file) {
            var reader = new FileReader();
            reader.onloadend = function (e) {
              if (this.error) {
                reject(this.error);
              }
              console.log(this.result);
            };

            reader.readAsText(file);
          },
          (e) => reject(e)
        );
      },
      (e) => reject(e)
    );
  });
};
