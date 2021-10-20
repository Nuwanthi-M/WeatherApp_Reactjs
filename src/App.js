import React,{ useState} from 'react';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'weather-icons/css/weather-icons.css';

const api ={
   key:`8c7e00d59e23405d93def9effab7a744`,
   base:`https://api.openweathermap.org/data/2.5/`
            }


function App(){

const [query, setQuery]= useState('');
const [weather, setWeather]= useState({});

const search = ser =>{if(ser.key==="Enter"){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(res =>res.json())
  .then(result =>{
    setWeather(result);
    setQuery('');
    console.log(result);
                 });
                                           }
}


const dateset = (d) =>
  {
    let months=["January","February","March","April","May","June","July","August","September",
  "Octomber","November","December"];


    let days=["Sunday","Monday","Tuesday","Wendasday","Thursday","Friday","Saturday"];

    let day=days[d.getDay()];
    let  date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };




  function weatherIcon(range)
  {  
  switch(true)
  {
    case range>=200 && range<=232: return(<i className="wi wi-day-thunderstorm display-2"/>);
   
    case range>=300 && range<=321: return( <i className="wi wi-day-sleet display-2"/>);
    
    case range>=500 && range<=531: return( <i className="wi wi-day-storm-showers display-2"/>);
    
    case range>=600 && range<=622: return( <i className="wi wi-day-snow display-2"/>);
    
    case range>=701 && range<=781: return( <i className="wi wi-day-fog display-2"/>);
    
    case range===800: return( <i className="wi wi-day-sunny display-2"/>);
     
    case range>=801 && range<=804: return( <i className="wi wi-day-fog display-2"/>);
    
    default: return( <i className="wi wi-day-sunny display-2"/>);
 }
}




function minmax(min,max){
  return(
    <h3>
      <span style={{ fontsize:"22px",fontweight: "bold",color: "white"}}>{Math.round(min)}°C/{Math.round(max)}°C </span>
    </h3>);
}

  return(

  <div className=
  {(typeof weather.main !="undefined") ? (
        (weather.weather[0].description==="overcast clouds") ? 'app warm1':
        (weather.weather[0].description==="broken clouds") ? 'app warm2' :
        (weather.weather[0].description==="scrattered clouds") ? 'app warm3' :
        (weather.weather[0].description==="few clouds") ? 'app warm4':
        (weather.weather[0].main==="Clear") ? 'app warm5' :
        (weather.weather[0].description==="mist") ? 'app warm6' :
        (weather.weather[0].description==="fog") ? 'app warm7':
        (weather.weather[0].main==="Snow") ? 'app warm8' :
        (weather.weather[0].main==="Rain") ? 'app warm9' :
        (weather.weather[0].main==="Drizzle") ? 'app warm10':
        (weather.weather[0].main==="Thunderstorm") ? 'app warm11' :
 'app'): 'app'}>
      <main>
        
          <div className="col-12" style={{textAlign: "center",color: "white",margin: "0 0 30px"}} >
              <h1>Get Weather</h1>
          </div>

      
          <div className="row">
            <div className="col-12 col-sm-2 col-md-3 col-lg-3"></div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-6"><input type="text"  spellCheck="false" className="form-control style3" 
                placeholder="Enter City here . . ." onChange={e =>setQuery(e.target.value)} value={query} onKeyPress={search}/ >
           </div> 
            <div className="col-12 col-sm-2 col-md-3 col-lg-3"></div>
          </div>  

                      
        <div className="text-center py-5">
            {(typeof weather.main != "undefined") ? (

              <div>
                <h1 className="display-6" style={{fontWeight:"600",color:"white",}}>
                  {weather.name},{weather.sys.country}
                  </h1>
                <p  className="display-6" style={{fontSize:"30px",fontWeight:"350",color:"white"}}>
                  <i>
                    {dateset(new Date())}
                    </i>
                    </p>
                <h1 className="display-1" style={{color:"white"}}>
                  { weatherIcon(weather.weather[0].id)}
                  </h1>
                <h2 className="display-5"  style={{fontWeight:"450",color:"white"}}>
                  {weather.weather[0].description}
                  </h2>
                                    
                <p style={{fontsize: "45px",fontweight: "800",color: "white"}}>
                  {Math.round(weather.main.temp)}°C
                  </p>
                {minmax(weather.main.temp_min,weather.main.temp_max)}


                                    
                <i>
                  <span className="px-5 py-3 "style={{fontsize:"22px",fontweight:"500",color:"white",}} >
                     {weather.main.pressure}Pa
                     </span>
                <span className="px-5 py-3 "style={{fontsize:"22px",fontweight:"500",color:"white",}} >
                  {weather.main.humidity}%
                  </span>
                  
                  </i>

                         
                                  
                <h5>
                  <span className="px-5" style={{fontsize:"22px",fontweight:"500",color:"white",}}>
                    Pressure
                    </span>
                <span className="px-4 "style={{fontsize:"22px",fontweight:"500",color:"white",}} >
                  Humidity
                  </span>
                  </h5>
              </div>
                                ) : ('')}
        </div>
   </main>
 </div>
);
};
export default App;
