import { ThemeProvider } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import MyTheme from './MyTheme';
// 회원가입
import VerifyPage from './pages/user/VerifyPage';
import SignUpPage from './pages/user/SignUpPage';
import SignUpSuccessPage from './pages/user/SignUpSuccessPage';
// 로그인
import LogInPage from './pages/user/LogInPage';
// 아이디 찾기
import SearchIdPage from './pages/user/SearchIdPage';
import SearchIdSuccessPage from './pages/user/SearchIdSuccessPage';
import SearchIdFailurePage from './pages/user/SearchIdFailurePage';
// 비밀번호 찾기
import SearchPasswordPage from './pages/user/SearchPasswordPage';
import SearchPasswordSuccessPage from './pages/user/SearchPasswordSuccessPage';
import SearchPasswordFailurePage from './pages/user/SearchPasswordFailurePage';
// 홈
import HomePage from './pages/smartfarm/HomePage';
import NotRegisterSmartfarmPage from './pages/smartfarm/NotRegisterSmartfarmPage';
import NotRegisterPlantPage from './pages/smartfarm/NotRegisterPlantPage';
// 스마트팜 등록
import RegisterSmartfarmPage from './pages/smartfarm/RegisterSmartfarmPage';
import RegisterSmartfarmSuccessPage from "./pages/smartfarm/RegisterSmartfarmSuccessPage";
// 작물 등록
import RegisterPlantPage from './pages/smartfarm/RegisterPlantPage';
import RegisterPlantSuccessPage from './pages/smartfarm/RegisterPlantSuccessPage';
// 스마트팜 시스템 제어
import LedControlPage from "./pages/smartfarm/LedControlPage";
import WateringSystemControlPage from './pages/smartfarm/WateringSystemControlPage';
import FanControlPage from "./pages/smartfarm/FanControlPage";
import CenterDoorControlPage from "./pages/smartfarm/CenterDoorPage";
// 알람
import AlarmPage from './pages/alarm/AlarmPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <Routes>
        {/* 회원가입 */}
        <Route path={process.env.REACT_APP_VERIFY_PATH} element={<VerifyPage />}/>
        <Route path={process.env.REACT_APP_SIGNUP_PATH} element={<SignUpPage />}/>
        <Route path={process.env.REACT_APP_SIGNUP_SUCCESS_PATH} element={<SignUpSuccessPage />}/>
        {/* 로그인 */}
        <Route path={process.env.REACT_APP_LOGIN_PATH} element={<LogInPage />}/>
        {/* 아이디 찾기 */}
        <Route path={process.env.REACT_APP_SEARCH_ID_PATH} element={<SearchIdPage />}/>
        <Route path={process.env.REACT_APP_SEARCH_ID_SUCCESS_PATH} element={<SearchIdSuccessPage />}/>
        <Route path={process.env.REACT_APP_SEARCH_ID_FAILURE_PATH} element={<SearchIdFailurePage />}/>
        {/* 비밀번호 찾기 */}
        <Route path={process.env.REACT_APP_SEARCH_PASSWORD_PATH} element={<SearchPasswordPage />}/>
        <Route path={process.env.REACT_APP_SEARCH_PASSWORD_SUCCESS_PATH} element={<SearchPasswordSuccessPage />}/>
        <Route path={process.env.REACT_APP_SEARCH_PASSWORD_FAILURE_PATH} element={<SearchPasswordFailurePage />}/>
        {/* 홈 */}
        <Route path={process.env.REACT_APP_HOME_PATH} element={<HomePage />}/>
        <Route path={process.env.REACT_APP_HOME_NOT_REGISTER_SMARTFARM_PATH} element={<NotRegisterSmartfarmPage />}/>
        <Route path={process.env.REACT_APP_HOME_NOT_REGISTER_PLANT_PATH} element={<NotRegisterPlantPage />}/>
        {/* 스마트팜 등록 */}
        <Route path={process.env.REACT_APP_REGISTER_SMARTFARM_PATH} element={<RegisterSmartfarmPage />}/>
        <Route path={process.env.REACT_APP_REGISTER_SMARTFARM_SUCCESS_PATH} element={<RegisterSmartfarmSuccessPage />}/>
        {/* 작물 등록 */}
        <Route path={process.env.REACT_APP_RESITER_PLANT_PATH} element={<RegisterPlantPage />}/>
        <Route path={process.env.REACT_APP_REGISTER_PLANT_SUCCESS_PATH} element={<RegisterPlantSuccessPage />}/>
        {/* 스마트팜 시스템 제어 */}
        <Route path={process.env.REACT_APP_CONTROL_LED_PATH} element={<LedControlPage />}/>
        <Route path={process.env.REACT_APP_CONTROL_WATERING_SYSTEM_PATH} element={<WateringSystemControlPage />}/>
        <Route path={process.env.REACT_APP_CONTROL_FAN_PATH} element={<FanControlPage />}/>
        <Route path={process.env.REACT_APP_CONTROL_CENTER_DOOR_PATH} element={<CenterDoorControlPage />}/>
        <Route path={process.env.REACT_APP_CONTROL_ALARM_PATH} element={<AlarmPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;