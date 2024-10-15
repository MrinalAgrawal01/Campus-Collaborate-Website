const POR = require('../Models/por');
const Projects = require('../Models/project');
const Students = require('../Models/student');
const Skills = require('../Models/skill');
const Feedback = require('../Models/feedback');


const project_index =(req,res)=>{
    Projects.find().sort({createdAt:-1})
    .then((resultproject)=>{
        res.render('homepage/home',{myproject: resultproject})
    })
    .catch((err)=>{
        console.log(err);
    });
}

const project_details=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    Projects.findById(id)
        .then(result=>{
            res.render('homepage/homeprojectdetails',{myproject: result})
        })
        .catch((err)=>{
            res.status(404).render('404');
        });
}

const feedback_create=(req,res)=>{
    console.log(req.body);
    const por=new Feedback(req.body);

    por.save()
        .then((result)=>{
            res.redirect('homepage/home');
        })
        .catch((err)=>{
            console.log(err);
        });
}

const feedback_index =(req,res)=>{
    Feedback.find().sort({createdAt:-1})
    .then((resultfeedback)=>{
        res.render('homepage/home',{currentfeedback: resultfeedback})
    })
    .catch((err)=>{
        console.log(err);
    });
}

module.exports={
    project_details,
    project_index,
    feedback_create,
    feedback_index
}