import Header from "../components/Header";
import MainForm from "../components/MainForm";
import Calendar from "../components/Calendar";
import {useEffect, useState} from 'react';
import StepCard from "../components/StepCard";

function Home() {
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

  // set scrum rule to schedule
  useEffect(() => {
    let endDate = ""
    
    if (startDate) {
      const days = Number(durationWeek) * 7
      const endDateMiliSeconds = new Date(startDate).getTime() + ( 1000 * 60 * 60 * 24 * (days - 1));
      endDate = new Date(endDateMiliSeconds).toISOString().split('T')[0];
    }

    let newScheduleArr = [
      {
        activity: "Sprint Start",
        startDate: startDate,
        desc: "Pastikan pada awal sprint, semua sprint backlog (apa yang akan kita kerjakan nanti pada saat sprint) sudah siap"
      },
      {
        activity: "Daily Standup",
        dayCodes: [1, 2, 3, 4, 5],
        startTime: startTime,
        desc: `Daily standup (dimulai jam ${startTime}) adalah rapat harian yang membahas tentang 3 hal: Apa yang sudah dikerjakan, Apa yang akan dikerjakan hari ini, dan halangan apa yang dihadapi saat melakukan pengerjaan`
      },
      {
        activity: "Weekend",
        dayCodes: [6, 0],
        startTime: null,
        desc: "Pegawai juga perlu liburan."
      },
      {
        activity: "Sprint Review",
        startDate: endDate,
        desc: `Pada sprint review dibahas semua hal yang telah dikerjakan pada ${durationWeek} minggu lalu`
      },
      {
        activity: "Sprint Retrospective",
        startDate: endDate,
        desc: "Pada sprint retrospective, ditentukan beberapa ide yang harus mulai dilakukan, dihentikan, atau dilanjutkan pada sprint kedepan agar sprint dapat berjalan lebih baik lagi."
      },
    ];

    setScheduleArr(newScheduleArr);
  }, [durationWeek, startDate, startTime]);

  return (
    <div className="text-gray-700 p-4">
      <Header />
      <StepCard stepNumber={1} cardTitle="Perencanaan">
        <p className="text-center text-lg max-w-xl">
          Sebelum melakukan sprint, rencanakan penambahan apa 
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
          <StepCard end={true}>
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

export default Home;
