import myStyle from './styles';

const Sensor = ({ sensor }) => {
    return(
      <div  style={myStyle.unit}>
        <div style={myStyle.sensor} align="center">
          <p style={myStyle.title}>Moisture sensor</p>
          <p style={myStyle.details}>{sensor.moist}%</p>
        </div>
        <div style={myStyle.sensor} align="center">
          <p style={myStyle.title}>Light intensity sensor</p>
          <p style={myStyle.details}>{sensor.light}%</p>
        </div>
        <div style={myStyle.sensor} align="center">
          <p style={myStyle.title}>Temperature sensor</p>
          <p style={myStyle.details}>{sensor.temp}°C</p>
        </div>
      </div>
    );
}

export default Sensor;