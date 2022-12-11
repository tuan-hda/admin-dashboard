import { useState } from "react";
import FullCalendar, { EventApi, formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Box } from "@mui/system";
import Header from "../../components/Header";
import { List, ListItem, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (window.confirm("Are you sure you want to delete the event " + selected.event.title)) {
      selected.event.remove();
    }
  };

  return (
    <Box m='20px'>
      <Header title='CALENDAR' subtitle='Full Calendar Interactive Page' />

      <Stack direction='row' justifyContent='space-between'>
        {/* CALENDAR SIDEBAR */}
        <Box bgcolor={colors.primary[400]} flex='1 1 20%' p='15px' borderRadius='4px'>
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((e) => (
              <ListItem
                key={e.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={
                    <Typography>
                      {formatDate(e.start!, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar
            height='70vh'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView='dayGridMonth'
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2022-12-14" },
              { id: "4321", title: "Timed event", date: "2022-12-28" },
            ]}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Calendar;
