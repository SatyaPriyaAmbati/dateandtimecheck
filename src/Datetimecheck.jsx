import './Date.css'
function Datetimecheck() {
  const currentDate = new Date().toLocaleDateString(); 
  const currentTime = new Date().toLocaleTimeString(); 

  return (
    <div className="Styling">
      <p>Current Date: <b>{currentDate}</b></p>
      <p>Current Time: <b>{currentTime}</b></p> {/* Fixed typo in the output */}
    </div>
  );
}

export default Datetimecheck;
