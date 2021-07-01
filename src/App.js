import Header from "./components/Header";
import MainForm from "./components/MainForm";
import Calendar from "./components/Calendar";
import {useEffect, useState} from 'react';
import StepCard from "./components/StepCard";

function App() {
  const [durationWeek, setDurationWeek] = useState(0);
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [scheduleArr, setScheduleArr] = useState([]);

  function formCompleted() {
    if (durationWeek <= 0) {
      return false;
    }

    if (!startDate) {
      return false;
    }

    if (!startTime) {
      return false;
    }

    return true;
  }

  useEffect(() => {
    let newScheduleArr = [
      {
        activity: "Daily Standup",
        dayCodes: [1, 2, 3, 4, 5],
        startTime: startTime,
      },
      {
        activity: "Libur",
        dayCodes: [6, 0],
        startTime: null,
      }
    ];

    setScheduleArr(newScheduleArr);
  }, [startTime]);

  return (
    <div className="max-w-3xl h-screen mx-auto text-gray-700 p-4">
      <Header />
      <StepCard stepNumber={1} cardTitle="Perencanaan">
        <p className="text-center text-lg">
          Sebelum kita melakukan sprint, kita akan mencoba untuk menentukan penambahan apa 
          yang akan dikerjakan (dapat berupa perbaikan bug, penambahan fitur, atau membuat <a className="link" href="https://id.wikipedia.org/wiki/Minimum_viable_product">MVP</a>)
        </p>
      </StepCard>
      <StepCard 
        cardTitle={"Menentukan Durasi Sprint"}
        stepNumber={2} 
        end={formCompleted() ? false : true}
      >
        <MainForm
          onDurationWeekChange={setDurationWeek}  
          onStartDateChange={setStartDate}
          onStartTimeChange={setStartTime}
        />
      </StepCard>
      { formCompleted() ? (
          <StepCard>
            <Calendar 
              durationWeek={durationWeek}
              startDate={startDate}
              scheduleArr={scheduleArr}
            />
          </StepCard>
        ) : undefined
      }
    </div>
  );
}

export default App;
