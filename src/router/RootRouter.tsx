import { Routes, Route } from 'react-router-dom';
import MainPage from '../page/MainPage';
import RoutingPath from './routing';

const RootRouter = () => {
  return (
    <Routes>
      <Route path={RoutingPath.MainPage} element={<MainPage />} />
    </Routes>
  );
};

export default RootRouter;
