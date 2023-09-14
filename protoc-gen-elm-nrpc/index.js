#!/usr/bin/env node

const fs = require('fs');
const Elm = require("./main.js").Elm


const chunks = [];
process.stdin.on("data", (chunk) => {
    chunks.push(chunk);
});
process.stdin.on("end", () => {
    const request = Buffer.concat(chunks);

    const app = Elm.Generate.init({
        flags: { request : request.toString("base64") },
    });

    if (app.ports.onSuccessSend) {
        app.ports.onSuccessSend.subscribe(function(response) {
            const bytes = Buffer.from(response, "base64")
            process.stdout.write(bytes);
        })
    }

    if (app.ports.onFailureSend) {
        app.ports.onFailureSend.subscribe(function(errors) {
            console.log("Failed:", errors)
        })
    }
});


