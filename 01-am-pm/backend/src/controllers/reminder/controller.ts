import { NextFunction, Request, Response } from "express";
import Reminder from "../../models/reminder";
import Meetings from "../../models/Meeting";

export async function getAllReminder(req: Request, res: Response, next: NextFunction) {
    try {
        const reminders = await Reminder.findAll();
        res.status(200).json(reminders);
    } catch (error) {
        next(error);
    }
}

export async function sendReminder(req: Request<{id: string}, {}, {reminderTo: string}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { reminderTo } = req.body;

        const meeting = await Meetings.findByPk(id);

        if (!meeting) {
            res.status(404).json({ message: `meeting with id ${id} not found` });
            return;
        }

        await Reminder.create({ meetingId: id, reminderTo }); 
        res.status(200).json({ message: `reminder sent for meeting with id ${id} to ${reminderTo}` });
        console.log(`reminder sent for meeting with id: ${id} to ${reminderTo}`);
    } catch (error) {
        next(error);
    }
}

export async function deleteReminder(req: Request<{id: string}, {}, {}>, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const reminder = await Reminder.findByPk(id);

        if (!reminder) {
            res.status(404).json({ message: `reminder with id ${id} not found` });
            return;
        }

        await reminder.destroy();
        res.status(200).json({ message: `reminder with id ${id} deleted` });
    } catch (error) {
        next(error);
    }
}