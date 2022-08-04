const express = require("express");
const Favoritos = require("../models/Favoritos");
const router = express.Router();




router.get("/:id",async (req,res)=>{
  try{
    const userId= req.params.id
  const userFav= await Favoritos.findAll({where:{userId}})
  return res.status(200).send(userFav)
  }catch(error){
    return res.sendStatus(404)
  }
})

router.post("/add", async (req, res) => {
  try {
    const { userId, code, original_title,poster_path, overview,vote_average } = req.body;
    await Favoritos.findOrCreate({
      where: { code, userId },
      defaults: { userId, code,original_title, poster_path, overview,vote_average}
    });
    return res.status(201);
  } catch (error) {
    console.log(error)
  }
});

router.delete("/remove" ,async (req, res) => {
  try {
     await Favoritos.destroy({
      where: req.body,
    });
    return res.sendStatus(200);
  } catch (error) {
    return error;
  }
});







module.exports = router;