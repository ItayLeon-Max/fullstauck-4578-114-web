import { NextFunction, Request, Response } from "express";
import "../../models/developmentGroup";
import developmentGroup from "../../models/developmentGroup";
import DevelopmentGroups from "../../models/developmentGroup";

//get all development groups functions
export async function getAllDevelopmentGroups(req: Request, res: Response, next: NextFunction) {
    try {
        const developmentGroups = await developmentGroup.findAll()
        res.status(200).json(developmentGroups);
        //print size of developmentGroups
        console.log(`Development Groups: ${developmentGroups.length}`);
    } catch (error) {
        next(error);
    }
}

// add DevelopmentGroup functions
export async function addDevelopmentGroup(req: Request<{ name: string }>, res: Response, next: NextFunction) {
    const { name } = req.body;
    try {
        const developmentGroup = await DevelopmentGroups.create({
            name
        });
        res.status(201).json(developmentGroup);
        console.log(`created new developmentGroup with id: ${developmentGroup.id}`);
    } catch (error) {
        next(error);
    }
}

// delete DevelopmentGroup functions
export async function deleteDevelopmentGroup(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const developmentGroup = await DevelopmentGroups.findByPk(id);
        if (!developmentGroup) {
            res.status(404).json({ message: `developmentGroup with id ${id} not found` });
            return;
        }
        await developmentGroup.destroy();
        res.status(204).end();
        console.log(`developmentGroup with id: ${id} deleted`);
    } catch (error) {
        next(error);
    }
}

// update DevelopmentGroup functions
export async function updateDevelopmentGroup(req: Request<{ id: string, name: string }>, res: Response, next: NextFunction) {
    const { id, name } = req.body;
    try {
        const developmentGroup = await DevelopmentGroups.findByPk(id);
        if (!developmentGroup) {
            res.status(404).json({ message: `developmentGroup with id ${id} not found` });
            return;
        }
        developmentGroup.name = name;
        await developmentGroup.save();
        res.status(200).json(developmentGroup);
        console.log(`developmentGroup with id: ${id} updated`);
    } catch (error) {
        next(error);
    }
}



