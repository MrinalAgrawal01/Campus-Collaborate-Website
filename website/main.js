const express =require('express');
const morgan=require('morgan');

const POR = require('./Models/por');
const Projects = require('./Models/project');
const Students = require('./Models/student');
const Skills = require('./Models/skill');
const Feedback = require('./Models/feedback');

const profileRoutes = require('./Routes/profileRoutes');
const homeRoutes = require('./Routes/homeRoutes');

const mongoose=require('mongoose');
const { machine } = require('os');

const main = express();

const dbURI = 'mongodb+srv://meghananelapati681:campuscampus@cluster0.zd9gm8i.mongodb.net/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, tlsAllowInvalidCertificates: true, })
  .then((result) => {
    main.set('view engine', 'ejs');
    main.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  })
  .catch((err) => console.log(err));

main.use('/public/', express.static('./public'));
main.use(express.static("./public"));
main.use(express.static("./views"));
main.use('/views/',express.static("./views"));
main.use(express.urlencoded({extended: true}));
main.use(morgan('dev'));
main.set('view engine','ejs');
main.use('/dashboard', profileRoutes);
main.use('/home', homeRoutes);

main.get('/getstarted',(req,res)=>{
  res.render('getstarted');
});
main.get('/',(req,res)=>{
  res.redirect('/getstarted');
  
});
main.get('/about',(req,res)=>{
  res.render('about');
});



main.use((req,res)=>{
    res.status(404).render('404'); 
});