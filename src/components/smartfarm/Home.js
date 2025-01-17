import HomeNotRegisterSmartfarm from './HomeNotRegisterSmartfarm';
import HomeNotRegisterPlant from './HomeNotRegisterPlant';
import HomeRegisterPlant from './HomeRegisterPlant';
import Environment from './Environment';
import System from './System';
import MyCard from '../common/MyCard';
import bulb from '../../lib/icon/bulb.png';
import raindrops from '../../lib/icon/raindrops.png';
import wind from '../../lib/icon/wind.png';
import door from '../../lib/icon/door.png';

const Home = ({
    existSmartfarm,
    existPlant,
    plantName,
    day,
    temperature,
    humidity,
    waterTemperature,
    waterLevel,
    ndvi,
    ledStatus,
    wateringSystemStatus,
    fanStatus,
    centerDoorStatus,
    goRegisterSmartfarm,
    goRegisterPlant,
    onHarvest
}) => {
    const system = [
        {
            id: 1,
            image: bulb,
            imageLink: process.env.REACT_APP_CONTROL_LED_PATH,
            title: 'LED',
            text: ledStatus,
            sx: { mb: 2.5 }
        },
        {
            id: 2,
            image: raindrops,
            imageLink: process.env.REACT_APP_CONTROL_WATERING_SYSTEM_PATH,
            title: '관수 시스템',
            text: wateringSystemStatus,
            sx: { mb: 2.5 }
        },
        {
            id: 3,
            image: wind,
            imageLink: process.env.REACT_APP_CONTROL_FAN_PATH,
            title: '환기팬',
            text: fanStatus,
            sx: { mb: 2.5 }
        },
        {
            id: 4,
            image: door,
            imageLink: process.env.REACT_APP_CONTROL_CENTER_DOOR_PATH,
            title: '중앙문',
            text: centerDoorStatus
        },
    ]

    return (
        !existSmartfarm ? (
            <HomeNotRegisterSmartfarm onClick={goRegisterSmartfarm}/>
        ) : (
            <div style={{ width: '100%'}}>
                { !existPlant ? (
                    <HomeNotRegisterPlant onClick={goRegisterPlant}/>
                ) : (
                    <HomeRegisterPlant
                        name={plantName}
                        day={day}
                        ndvi={ndvi}
                        onHarvest={onHarvest}
                    />
                )}
                <MyCard sx={{ width: '100%', mt: 6, mb: 4 }}>
                    <Environment
                        name='온도'
                        value={`${temperature}℃`}
                        sx={{ mb: 1 }}
                    />
                    <Environment
                        name='습도'
                        value={`${humidity}%`}
                        sx={{ mb: 1 }}
                    />
                    <Environment
                        name='수온'
                        value={`${waterTemperature}℃`}
                        sx={{ mb: 1 }}
                    />
                    <Environment
                        name='수위'
                        value={`${waterLevel}cm`}
                        sx={{ mb: 1 }}
                    />
                    <Environment name='NDVI(정규 식생 지수)' value={ndvi ? ndvi : '-'}/>
                </MyCard>
                <MyCard sx={{ width: '100%' }}>
                    { system.map((system) => 
                        <System
                            key={system.id}
                            image={system.image}
                            imageLink={system.imageLink}
                            title={system.title}
                            text={system.text}
                            sx={system.sx}
                        />
                    )}
                </MyCard>
                <div style={{ height: 30 }}/>
            </div>
        )
    );
};

export default Home;