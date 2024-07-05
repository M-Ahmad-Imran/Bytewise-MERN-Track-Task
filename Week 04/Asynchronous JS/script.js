const content = () => {

    const Name = document.getElementById("name");
    const container = document.getElementById("content");
    const threats = [
        `Checking the validation...`,
        `${Name.value} is founded...`,
        `Connecting with ${Name.value}...`,
        `Connected Successfully...`,
        `Downloading... `,
        `Picture folder is Downloaded...`
    ];

    // Callback Method...

    // function displaythreatWithCallback(threats, index, callback) {
    //     if (index < threats.length) {
    //         setTimeout(() => {
    //             const threatElement = document.createElement("div");
    //             threatElement.textContent = threats[index];
    //             container.appendChild(threatElement);
    //             callback(threats, index + 1, callback);
    //         }, 2000);
    //     }
    // }

    // displaythreatWithCallback(threats, 0, displaythreatWithCallback);

    // Promises Method

    // function displayThreatWithPromise(threat) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (Name.value === "") {
    //                 reject("Miss the phase...");
    //             } else {
    //                 document.body.style.backgroundColor = "Black";
    //                 document.body.style.color = "green";

    //                 const btn = document.getElementById("Magic-btn");

    //                 btn.style.color = "yellow";
    //                 btn.style.backgroundColor = "black";
    //                 btn.innerText = "Hacked 😈"

    //                 const threatElement = document.createElement("div");
    //                 threatElement.textContent = threat;
    //                 container.appendChild(threatElement);
    //                 resolve();
    //             }
    //         }, 2000);
    //     });
    // }

    // let promiseChain = Promise.resolve();

    // if (Name.value !== "") {

    // if (container.contains(child) == true){
    //     container.removeChild(child);
    // }
    //     threats.forEach((threat) => {
    //         promiseChain = promiseChain
    //             .then(() => displayThreatWithPromise(threat))
    //             .catch((error) => {
    //                 console.error(error);
    //                 // Continue with the next message even if the current one fails
    //                 return Promise.resolve();
    //             });
    //     });
    // }
    // else {
    //     const invalidName = document.createElement("div");
    //     invalidName.id = "child";
    //     invalidName.textContent = "Enter the Valid Name...";
    //     container.appendChild(invalidName);
    // }

    // Asyn/Await

    function displayMessage(threat) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.body.style.backgroundColor = "Black";
                document.body.style.color = "green";

                const btn = document.getElementById("Magic-btn");

                btn.style.color = "yellow";
                btn.style.backgroundColor = "black";
                btn.innerText = "Hacked 😈"

                const threatElement = document.createElement("div");
                threatElement.textContent = threat;
                container.appendChild(threatElement);
                resolve();
            }, 2000);
        });
    }

    async function displayMessages(threats) {
        for (const threat of threats) {
            await displayMessage(threat);
        }
        const img = document.createElement('img');
        img.src = "hacker.jpg";
        container.appendChild(img);
    }

    displayMessages(threats);
}
