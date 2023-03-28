const Moralis = require("moralis").default;
const fs = require("fs");
require("dotenv").config();

const fileUploads = [
    {
        path : "prescription.png",
        content : fs.readFileSync("./prescription.png",{encoding:"base64"})
    }
]

async function uploadToIpfs(){
    await Moralis.start({ apiKey: 'NHcVVxYXYFOsWqAIB5NycAEFJqGFALq4TD9ymlsABgOBgFyO2caUWhs575jjoR6b'});

    const res = await Moralis.EvmApi.ipfs.uploadFolder({
        abi : fileUploads
    })

    console.log(res.result)
}
uploadToIpfs();
 