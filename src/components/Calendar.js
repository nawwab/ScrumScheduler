import { useRef } from "react";

function DateBox({date}) {
  const months = useRef([
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", 
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
  ])

  return (
    <div className="p-2 bg-blue-500 text-white">
      <p>{`${date.getDate()} ${months.current[date.getMonth()]}`}</p>
      <div></div>
    </div>
  )
}

function Calendar({durationWeek, scheduleArr, startDate}) {
    // function calculateDate(date, dayCount) {
    //   const temp = new Date(date);
    //   const miliseconds = temp.getTime() + (1000 * 60 * 60 * 24 * dayCount);
    //   return new Date(miliseconds);
    // }

    function allDate(date, week) {
      const dateCollection = [];
      const temp = new Date(date);
      const totalDay = week * 7;

      for (let day = 0; day < totalDay; day++) {
        const milisecondsFromStart = temp.getTime() + (1000 * 60 * 60 * 24 * day);
        dateCollection.push(new Date(milisecondsFromStart));
      }

      return dateCollection;
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {
          allDate(startDate, durationWeek).map((x, idx) => {
            return <DateBox date={x} key={idx}/>
          })
        }
      </div>
    );
}

export default Calendar;