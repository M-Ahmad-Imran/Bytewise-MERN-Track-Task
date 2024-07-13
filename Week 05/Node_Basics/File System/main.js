const path = require("path")

const AddEmails = async () => {
    const fs = require("fs").promises;
    try {
        const mail = await fs.readFile(path.join(__dirname, 'Text', "emails.txt"), 'utf8');
        console.log(mail);
        await fs.appendFile(path.join(__dirname, 'Text', "emails.txt"), '\nabdulwaheed@gmail.com');
    }
    catch (err) {
        console.log(err);
    }
}

const AddBlog = async () => {
    try {
        const fs = require("fs");
        const ReadBlog = await fs.createReadStream(path.join(__dirname, 'Text', "Blog.txt"), { encoding: 'utf8' });
        const CollectBlog = await fs.createWriteStream(path.join(__dirname, 'Text', "CollectBlog.txt"))

        await ReadBlog.pipe(CollectBlog);
    }
    catch (err) {
        console.log(err);
    }
}

AddEmails();
AddBlog();