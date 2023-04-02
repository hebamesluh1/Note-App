import React, { useContext } from 'react'

import { HeaderStyle } from './style';
import { SaveBtn } from '../AddNote/style';

import { themeContext } from '../../context/themeContext';
import { darkTheme, lightTheme } from '../../global/theme';

const Header = () => {

  const [theme, setTheme] = useContext(themeContext);

  const toggleTheme = () => {
    setTheme((theme) => (theme.theme === 'light' ? darkTheme : lightTheme));
    localStorage.setItem('theme', theme.theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <HeaderStyle>
      <h1>Notes</h1>
      <SaveBtn onClick={toggleTheme}>Toggle Mode</SaveBtn>
    </HeaderStyle>
  )
}

export default Header