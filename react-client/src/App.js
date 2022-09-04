import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Sensors from './components/Sensors/Sensors';
import Chart from './components/Chart/Chart';
import { getSensors } from './actions/sensors';
import { getHistoric } from './actions/historic';
import myStyle from './styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSensors());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHistoric());
  }, [dispatch]);

  return(
    <div style={myStyle.main} align="center">
      <div style={myStyle.header}>
          <p style={myStyle.title}>Smart Home</p>
      </div>
      <div style={myStyle.sensors}>
        <Sensors/>
      </div>
      <div style={myStyle.sensors}>
        <Chart/>
      </div>
    </div>
  )
}

export default App;