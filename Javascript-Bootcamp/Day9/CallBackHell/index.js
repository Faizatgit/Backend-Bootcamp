function downloadFile(url,downloaded)
{
    console.log(`Starting the download from ${url}`);

    setTimeout(() => {
        downloaded(url);
    },3000);
}

function compressFile(filename,compressed)
{
    console.log(`compressing file: ${filename}`);

    setTimeout(() => {
        compressed(filename);
    },2000);
}

function uploadFile(compressedPath,uploaded)
{
    console.log(`Uploading the File`);

    setTimeout(() => {
        uploaded(compressedPath);
    },3000);
}

const url = 'https://github.com/Faizatgit';

downloadFile(url , function download(url){
    const filename = url.split('/').pop();
    console.log(`File downloaded successfully`);
    compressFile(filename, function compressed()
    {
        const compressedPath = filename.split('.')[0] + ".Zip" ;
        console.log(`File compressed successfully`);
        uploadFile(compressedPath,function uploaded(){
            const uploadPath = 'https://github.com/settings/billing/plans' + compressedPath;
            console.log(`File uploaded successfully at ${uploadPath}`);
            console.log("Everything done");
        })
    })
})

console.log("Millions of lines of code after downloadFile function is called");



