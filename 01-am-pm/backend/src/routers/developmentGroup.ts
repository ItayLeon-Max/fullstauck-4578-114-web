import { Router } from "express";
import { addDevelopmentGroup, deleteDevelopmentGroup, getAllDevelopmentGroups, updateDevelopmentGroup } from "../controllers/developmentGroup/controller";
import validation from "../middlewares/validation";
import { newDevelopmentGroupValidator, updateDevelopmentGroupValidator } from "../controllers/developmentGroup/validation";


const developmentGrouprouter = Router()

//developmentGroup routes
developmentGrouprouter.get('/', getAllDevelopmentGroups)
developmentGrouprouter.post('/', validation(newDevelopmentGroupValidator) ,addDevelopmentGroup)
developmentGrouprouter.delete('/:id', deleteDevelopmentGroup)
developmentGrouprouter.put('/:id', validation(updateDevelopmentGroupValidator) ,updateDevelopmentGroup)

export default developmentGrouprouter