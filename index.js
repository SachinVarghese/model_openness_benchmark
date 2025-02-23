import * as fs from 'fs';

const directoryPath = '../model_openness_tool/models';

const fileList = fs.readdirSync(directoryPath);

let index = []

fileList.forEach((file,_)=>{
    index.push({
        name: file.split(".")[0],
        url:"/models/"+file
    })
})

fs.writeFileSync('public/index.json', JSON.stringify(index, null, 2));



