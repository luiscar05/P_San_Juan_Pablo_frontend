import { Calendar, dayjsLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from "dayjs";


export const Calendario= ()=>{

    const localizar= dayjsLocalizer(dayjs)
    const events = [
        {
            start:dayjs('2024-06-22T 08:30::00').toDate(),
            end:dayjs('2024-06-22T 09:00::00').toDate(),
            title:"Charla Universitarios"
        },
        
        {
            start:dayjs('2024-06-22T 11:30::00').toDate(),
            end:dayjs('2024-06-22T 12:30::00').toDate(),
            title:"Misa Aniversario"
        },

    ]
    return (
        <div className="Calendario" >
            <link rel="stylesheet" href="src\assets\css\Calendario.css"/>

            <Calendar 
                localizer={localizar}
                events={events}
                
            />
        </div>

        
    )
}

