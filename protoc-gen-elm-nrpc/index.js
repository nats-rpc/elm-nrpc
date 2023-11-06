#!/usr/bin/env node

const fs = require('fs');
const Elm = require("./elm.min.js").Elm


const chunks = [];
process.stdin.on("data", (chunk) => {
    chunks.push(chunk);
});
process.stdin.on("end", () => {
    const request = Buffer.concat(chunks);

    const app = Elm.Main.init({
        flags: { request : request.toString("base64") },
    });

    if (app.ports.output) {
        app.ports.output.subscribe(function(response) {
            const bytes = Buffer.from(response, "base64")
            process.stdout.write(bytes);
        })
    }
});


