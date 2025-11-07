import './App.css';
import { TextInput } from '@mai/components/inputs/text-input';
import { DatlasTheme } from '@mai/components/theme';
import { UserProfile } from '@mai/business-components/user-profile';

const App = () => {
  return (
    <DatlasTheme initialTheme="light">
      <div className="content">
        <p>Start building amazing things with Rsbuild.</p>
        <TextInput placeholder="Enter text here" />
        <UserProfile />
      </div>
    </DatlasTheme>
  );
};

export default App;
