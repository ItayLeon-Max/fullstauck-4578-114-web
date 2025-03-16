import { NextFunction, Request, Response } from "express";
import Tasks from "../../models/task";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";
import Meetings from "../../models/Meeting";
import User from "../../models/user";

// Get all tasks
export async function getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
        const tasks = await Tasks.findAll();
        res.json(tasks);
    } catch (error) {
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}

// Get a task by id
export async function getTaskById(req: Request, res: Response, next: NextFunction) {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        } else {
            res.json(task);
        }
    } catch (error) {
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}

// Add a task
export async function addTask(req: Request, res: Response, next: NextFunction) {
    try {
        const { description, meetingId, assignedTo, status, deadline } = req.body;
        const user = await User.findByPk(assignedTo);
        if (!user) return next(new AppError(StatusCodes.NOT_FOUND, `User with id ${assignedTo} not found`));
        if (meetingId) {
            const meeting = await Meetings.findByPk(meetingId);
            if (!meeting) return next(new AppError(StatusCodes.NOT_FOUND, `Meeting with id ${meetingId} not found`));
        }
        
        const task = await Tasks.create({
            description,
            meetingId: meetingId || null,
            assignedTo,
            status: status || 'open',
            deadline: new Date(deadline),
        });

        res.status(StatusCodes.CREATED).json(task);
        console.log(`Created new task with id: ${task.id}`);
    } catch (error) {
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}

// Update a task
export async function updateTask(req: Request, res: Response, next: NextFunction) {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            return next(new AppError(StatusCodes.NOT_FOUND, `Task with id ${req.params.id} not found`));
        }

        const { description, meetingId, assignedTo, status, deadline } = req.body;
        const user = await User.findByPk(assignedTo);
        if (!user) {
            return next(new AppError(StatusCodes.NOT_FOUND, `User with id ${assignedTo} not found`));
        }
        if (meetingId) {
            const meeting = await Meetings.findByPk(meetingId);
            if (!meeting) {
                return next(new AppError(StatusCodes.NOT_FOUND, `Meeting with id ${meetingId} not found`));
            }
        }

        task.description = description;
        task.meetingId = meetingId || null;
        task.assignedTo = assignedTo;
        task.status = status || 'open';
        task.deadline = new Date(deadline);

        await task.save();
        res.json(task);
        console.log(`Updated task with id: ${task.id}`);
    } catch (error) {
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}

// Delete a task
export async function deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            return next(new AppError(StatusCodes.NOT_FOUND, `Task with id ${req.params.id} not found`));
        }

        await task.destroy();
        res.json({ message: "Task deleted" });
        console.log(`Deleted task with id: ${task.id}`);
    } catch (error) {
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
    }
}


