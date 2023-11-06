'use client';

import { useThemeContext } from 'src/presentation/contexts';

import { ToggleCircle, ToggleContainer } from './styles';

export function ClientToggleTheme() {
  const { themeName, toggleTheme } = useThemeContext();

  const isToggled = themeName === 'light';

  return (
    <ToggleContainer onClick={toggleTheme} isToggled={isToggled}>
      <ToggleCircle isToggled={isToggled} />
    </ToggleContainer>
  );
}
