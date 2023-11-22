import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { ColorInput } from './color-input';

export const HomeScreen = () => {
  return (
    <main className="flex min-h-screen flex-col items-start justify-normal p-0">
      <ColorSchemeToggle />
      <ColorInput />
    </main>
  );
};
