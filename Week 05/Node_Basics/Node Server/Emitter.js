const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');

const Event = async (message,FileName) => {
    const date = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const Item = `${date}\t${uuid()}\t${message}\n`;
    console.log(Item);
    try{
        if(!fs.existsSync(path.join(__dirname,'Message'))){
            await fsPromise.mkdir(path.join(__dirname,'Message'));
        }
        await fsPromise.appendFile(path.join(__dirname,'Message',FileName),Item);
    } catch (err){
        console.error(err);
    }
}

module.exports = Event;