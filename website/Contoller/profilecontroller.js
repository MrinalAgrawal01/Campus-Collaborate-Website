const POR = require('../Models/por');
const Projects = require('../Models/project');
const Students = require('../Models/student');
const Skills = require('../Models/skill');


const por_index =(req,res)=>{
    POR.find().sort({createdAt:-1})
    .then((resultpor)=>{
        res.render('dashboard/profile',{position: resultpor})
    })
    .catch((err)=>{
        console.log(err);
    });
}

const skill_index =(req,res)=>{
    Skills.find().sort({createdAt:-1})
    .then((resultskill)=>{
        res.render('dashboard/profile',{skillset: resultskill})
    })
    .catch((err)=>{
        console.log(err);
    });
}

const project_index =(req,res)=>{
    Projects.find().sort({createdAt:-1})
    .then((resultproject)=>{
        res.render('dashboard/profile',{myproject: resultproject})
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
            res.render('dashboard/projectdetails',{myproject: result})
        })
        .catch((err)=>{
            res.status(404).render('404');
        });
}


const por_create=(req,res)=>{
    console.log(req.body);
    const por=new POR(req.body);

    por.save()
        .then((result)=>{
            res.redirect('dashboard/profile');
        })
        .catch((err)=>{
            console.log(err);
        });
}

const skill_create=(req,res)=>{
    console.log(req.body);
    const skill=new Skills(req.body);

    skill.save()
        .then((result)=>{
            res.redirect('dashboard/profile');
        })
        .catch((err)=>{
            console.log(err);
        });
}

const project_create=(req,res)=>{
    console.log(req.body);
    const project=new Projects(req.body);

    project.save()
        .then((result)=>{
            res.redirect('dashboard/profile');
        })
        .catch((err)=>{
            console.log(err);
        });
}

const por_delete=(req,res)=>{
    const id=req.params.id;

    POR.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect: 'dashboard/profile'})
        })
        .catch((err)=>{
            console.log(err);
        });
}

const skill_delete=(req,res)=>{
    const id=req.params.id;

    Skills.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect: 'dashboard/profile'})
        })
        .catch((err)=>{
            console.log(err);
        });
}

const project_delete=(req,res)=>{
    const id=req.params.id;

    Projects.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect: 'dashboard/profile'})
        })
        .catch((err)=>{
            console.log(err);
        });
}

module.exports={
    project_create,
    project_delete,
    project_details,
    project_index,
    por_create,
    por_delete,
    por_index,
    skill_create,
    skill_delete,
    skill_index
}