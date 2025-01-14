const express = require('express');
const path = require('path');

const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
})

app.listen(process.env.PORT || 8000, () => console.log('server running'));