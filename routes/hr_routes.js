let express = require('express');
let router = express.Router();
//separate route and we can link it wherever we like

router.get("/employees",(req,res)=>{
    res.send("Employees called");
});

router.post("/assign-task",(req,res)=>{
    res.send("assign task page called");
});
//create two more routes tasks and notification in get method
router.get("/tasks",(req,res)=>{
    res.send("task page called");
});
router.get("/notifications",(req,res)=>{
    res.send("notifications page called");
})
module.exports=router;