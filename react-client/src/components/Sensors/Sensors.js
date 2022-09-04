import { useSelector } from 'react-redux';
import Sensor from './Sensor/Sensor';
import myStyle from './styles';

const Sensors = () => {
    const sensors = useSelector((state) => state.sensors);
    return(
        <div style={myStyle.sensors}>
        {
            !sensors.length ? 
                <p style={myStyle.loading}>Loading</p>
            : 
                <>
                {
                    sensors.map((sensor) => (
                        <Sensor key={sensor._id} sensor={ sensor }/>
                    ))
                }
                </>
        }
        </div>
    );
}

export default Sensors;