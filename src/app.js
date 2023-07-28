 const express = require ("express")
 const path = require ("path")
 const app = express ()

 const port = process.env.PORT || 3000 

 app.set('view engine', 'hbs');

 var hbs = require ('hbs')

 const partialsPath = path.join(__dirname , "../temp/partials")

 hbs.registerPartials(partialsPath)

 app.get('/' , (req , res) => {
   res.render ('index' , {
      title : 'Home Bage' ,
       desc : "Welcome All !" ,
   })
 })

 app.get('/check' , (req , res) => {
   res.render ('check' , {
      title : 'Check Weather' ,
      latitude : '26.4941838299718',
      longitude : '29.871903452398',
      country : 'Egypt',
      weather : 'clear',
      temp : "33"
   })
 })


app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})