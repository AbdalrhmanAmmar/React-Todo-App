import { IFormInput } from "../Interfaces"

const TaskInformations:IFormInput[] = [
    {
        type: 'text',
        id: "YourTask",
        name: 'YourTask',
        placeholder:'YourTask'
    },
    {
        type: 'date',
        id: "date",
        name: 'Date',
        placeholder:'date'
    },
    {
        type: 'time',
        id: "time",
        name: 'Time',
        placeholder:'time'
    },

]


export default TaskInformations