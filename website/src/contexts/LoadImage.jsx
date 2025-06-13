import {existsSync, readFileSync, createWriteStream} from "node:fs";
import {get} from 'node:https';
// imagesFolder = ../../public/images/

// pfp_{username}.jpg
// filename = event_{objectId}.jpeg/jpg/png/svg
// dest = imagesFolder + filename
const imagesFolder = "../../public/images"
function LoadEventImage(event) {
    let file;
    const filePath = `${imagesFolder}/event_${event.id}.png`
    if(!existsSync(filePath)) {
        file = createWriteStream(imagesFolder);
    let request = get(`http://localhost:8000/events/${event.id}.png/image`, function (response) {
            response.pipe(file);
        });

        request.on('error', function (err) {
            console.log(err);
        });
    }
    else {
        file = readFileSync(filePath)
    }
    return URL.createObjectURL(file)
}