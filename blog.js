const express = require("express");
const app = express();
const port = 3000;

const posts =[
    {id:1, title:"first blog post by Haleemah", desc: "Don't miss out on the first blog post"},
     {id:2, title:"second blog post by Haleemah", desc: "Don't miss out on the second blog post"},
      {id:3, title:"third blog post by Haleemah", desc: "Don't miss out on the third blog post"},
       {id:4, title:"fourth blog post by Haleemah", desc: "Don't miss out on the fourth blog post"},
]

app.get("/posts", (req, res)=>{
  res.json(posts);
});

app.get("/posts/:id", (req, res)=>{
    const idPost = parseInt(req.params.id);
     const post = posts.find(p => p.id ===idPost);

     if(post){
      res.json(post)
     } else{
        res.status(404).json({ message: "Post not found" }); 
     }
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});