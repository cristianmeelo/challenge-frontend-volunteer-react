import ReactAudioPlayer from 'react-audio-player';
import url from '/audio/aboutme.mp3';
import { useState, useRef } from 'react';
import { Button } from '../button';
import { useTheme } from '../../context/theme'; // Importe o contexto de tema

export const Header = () => {
  const { isDarkMode } = useTheme(); // Acesse o estado do tema
  const [showPlayer, setShowPlayer] = useState(false);
  const audioPlayer = useRef(null);

  const togglePlayer = () => {
    setShowPlayer((prev) => !prev);
  };

  return (
    <header className={`flex justify-between items-center pt-12 font-manrope ${isDarkMode ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}>
      <span className="text-[36px]" aria-label="Nome do usuário">cristian melo.</span>
      <div aria-label="Texto descritivo adicional" className="flex items-center">
        <Button
          ariaLabel={showPlayer ? 'Closes the audio' : 'Listen about him'}
          onClick={togglePlayer}
          underlineFirstLine={!showPlayer}
          underlineHeight='1'
        >
          {showPlayer ? 'Ok,thanks' : 'Wanna hear about me?'}
          {showPlayer && (
            <div className={`absolute right-0 z-10 mt-4 shadow-lg ${isDarkMode ? 'bg-dark-bg' : 'bg-light-bg'}`}>
              <ReactAudioPlayer
                src={url}
                controls
                ref={audioPlayer}
              />
            </div>
          )}
        </Button>
      </div>
    </header>
  );
}
