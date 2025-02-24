import * as fs from 'fs';
import * as yaml from 'js-yaml';

const directoryPath = '../model_openness_tool/models/';

const fileList = fs.readdirSync(directoryPath);

let index = []

fileList.forEach((file,_)=>{
    let data;

    try {
        let fileContents = fs.readFileSync(directoryPath+file, 'utf8');
        data = yaml.load(fileContents);
    
    } catch (e) {
        console.log(e);
    }

    index.push({
        name: file.split(".")[0],
        url:"/models/"+file,
        org: data.release.producer
    })
})

fs.writeFileSync('public/index.json', JSON.stringify(index, null, 2));



