import { useEffect, useRef, useState } from "react";

function DateBox({date, activitiesArr, ActivityOnClick}) {
  const months = useRef([
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", 
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
  ]);

  const days = useRef([
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
  ]);

  function isHoliday() {
    return [6, 0].includes(date.getDay());
  }

  function HandleActivityClick(activityObj) {
    ActivityOnClick(activityObj);
  }

  return (
    <div className={`p-2 ${isHoliday() ? "bg-gray-600" : "bg-blue-600"} text-white rounded-sm`}>
      <p className="border-b border-gray-400 font-bold text-sm mb-1">
        {`${days.current[date.getDay()]}, ${date.getDate()} ${months.current[date.getMonth()]}`}
      </p>
      {
        activitiesArr.map((activity, idx) => {
          return (
            <div 
              className="bg-blue-400 rounded-md overflow-hidden mb-2 px-1 cursor-pointer" 
              key={idx}
              onClick={() => HandleActivityClick(activity)}
            >
              {activity.startTime ? <p className="text-xs">{activity.startTime}</p> : null}
              <p className="text-sm">{activity.activity}</p>
            </div>
          )
        })
      }
    </div>
  )
}

function Calendar({durationWeek, scheduleArr, startDate}) {
  const [clickedActivityObj, setClickedActivityObj] = useState({});

  useEffect(() => {
    closeDesc();
  }, [scheduleArr]);

  function allDate(date, week) {
    const dateCollection = [];
    const temp = new Date(date);
    const totalDay = week * 7;

    for (let day = 0; day < totalDay; day++) {
      const milisecondsFromStart = temp.getTime() + (1000 * 60 * 60 * 24 * day);
      const date =  new Date(milisecondsFromStart);
      const activitiesArr = [];

      for (const data of scheduleArr) {
        let activityObj = {}
        if (data.startDate) {
          let startDate = new Date(data.startDate);

          if (startDate.getTime() === date.getTime()) {
            activityObj.activity = data.activity;
            activityObj.startDate = data.startDate;
          }
        } else if (data.dayCodes.includes(date.getDay())) {
          activityObj.activity = data.activity;
        }

        if (activityObj.activity) {
          activityObj.startTime = data.startTime;
          activityObj.desc = data.desc;
          activitiesArr.push(activityObj);
        }
      }

      dateCollection.push({
        date,
        activitiesArr
      });
    }

    return dateCollection;
  }

  function activityOnClick(activityObj) {
    setClickedActivityObj(activityObj);
  }

  function closeDesc() {
    setClickedActivityObj({});
  }

  return (
    <div>
      {
        clickedActivityObj.activity ? (
          <div className="mb-4 p-4 bg-green-500 rounded-lg text-center cursor-default text-xl relative">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-700 cursor-pointer absolute right-5 top-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              onClick={closeDesc}
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h1 className="text-2xl font-bold mb-2">{clickedActivityObj.activity}</h1>
            <p className="max-w-xl mx-auto">{clickedActivityObj.desc}</p>
          </div>
        ) : (
          <p className="mb-4 p-4 text-center cursor-default text-xl opacity-50">
            Click <span className="bg-blue-400 text-sm rounded-md text-white px-1 py-1">kegiatan</span> pada kalendar dibawah untuk menampilkan deskripsi
          </p>
        )
      }
      <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
        {
          allDate(startDate, durationWeek).map((x, idx) => {
            return <DateBox 
              date={x.date} 
              activitiesArr={x.activitiesArr}
              ActivityOnClick={activityOnClick} 
              key={idx}
            />
          })
        }
      </div>
    </div>
  );
}

export default Calendar;