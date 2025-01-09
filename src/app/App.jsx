import { Game } from '../components/Game';
import { CONFIG_8_OUT_OF_19 } from '../common/constants/gameConfigs';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Game config={CONFIG_8_OUT_OF_19} />
      <Toaster />
    </>
  );
};
