const express = require ("express");
const app = express();
const port = 3000;

app.get("/profile/:username", (req, res)=>{
    const username =req.params.username;
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
    res.send(`Viewing the profile of ${formattedName}`);
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
});