function MainForm({onDurationWeekChange, onStartDateChange, onStartTimeChange}) {
    function handleStartDateChange(e) {
      onStartDateChange(e.target.value);
    }

    function handleDurationWeekChange(e) {
      onDurationWeekChange(Number(e.target.value));
    }

    function handleStartTimeChange(e) {
      onStartTimeChange(e.target.value);
    }

    return (
      <form className="py-2 grid grid-cols-1 sm:grid-cols-2">
          <div className="p-2">
            <label className="mr-4 text-lg font-semibold" htmlFor="start">Mulai</label>
            <input 
              className="p-1 border-b-2" 
              type="date" 
              name="start" 
              id="start"
              onChange={handleStartDateChange}
            />
          </div>
          <div className="p-2 flex justify-between items-center">
              <label className="mr-4 text-lg font-semibold" htmlFor="duration-week">Selama</label>
              <input 
                className="p-1 border-b-2 flex-grow" 
                type="number" 
                name="duration-week" 
                id="duration-week" 
                min="0" 
                max="4" 
                onChange={handleDurationWeekChange}
              />
              <p className="ml-4 text-lg font-semibold">Minggu</p>
          </div>
          <div className="p-2 flex justify-between items-center sm:col-span-2">
              <label className="mr-4 text-lg font-semibold" htmlFor="duration-week">Mulai Bekerja</label>
              <input 
                className="p-1 border-b-2 flex-grow" 
                type="time" 
                name="duration-week" 
                id="duration-week" 
                min="0" 
                max="4" 
                onChange={handleStartTimeChange}
              />
          </div>
      </form>
    );
}

export default MainForm;