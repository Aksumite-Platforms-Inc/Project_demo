const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center w-full gap-4 mb-8 sm:gap-8">
      <li>
        <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
          <h3 className="text-white">{formatTime(days)}</h3>
        </div>
        <span>Days</span>
      </li>
      <li>
        <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
          <h3 className="text-white">{formatTime(hours)}</h3>
        </div>
        <span>Hours</span>
      </li>
      <li>
        <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
          <h3 className="text-white">{formatTime(minutes)}</h3>
        </div>
        <span>Mins</span>
      </li>
      <li>
        <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
          <h3 className="text-white">{formatTime(seconds)}</h3>
        </div>
        <span>Secs</span>
      </li>
    </ul>
  );
};

export default CountdownTimer;
