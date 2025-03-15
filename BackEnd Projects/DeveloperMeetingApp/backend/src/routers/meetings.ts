import { Router } from "express";
import { addMeeting, deleteMeeting, getAllMeetingPerdevelopmentGroupID, getAllMeetings, updateMeeting } from "../controllers/meeting/controller";
import validation from "../middlewares/validation";
import { addMeetingValidator, updateMeetingValidator } from "../controllers/meeting/validator";


const meetingRouter = Router()

//meeting routes
meetingRouter.get('/', getAllMeetings)
meetingRouter.post('/',  validation(addMeetingValidator),addMeeting)
meetingRouter.get('/:developmentGroupId', getAllMeetingPerdevelopmentGroupID)
meetingRouter.delete('/:id', deleteMeeting)
meetingRouter.put('/:id', validation(updateMeetingValidator) ,updateMeeting)

export default meetingRouter