import Header from "./components/Header";
import MainForm from "./components/MainForm";
import Calendar from "./components/Calendar";
import {useState} from 'react';

function App() {
  const [startDate, setStartDate] = useState();
  const [durationWeek, setDurationWeek] = useState(0);

  return (
    <div className="max-w-3xl h-screen mx-auto text-gray-700 p-4">
      <Header />
      <MainForm 
        onStartDateChange={setStartDate} 
        onDurationWeekChange={setDurationWeek}  
      />
      { startDate && (durationWeek > 0) ? (
        <Calendar 
          startDate={startDate}
          durationWeek={durationWeek}
        />
      ) : (
        <p>Ayo cepetan diisi</p>
      )
      }
    </div>
  );
}

export default App;
