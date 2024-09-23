import { BaseInput } from '@ui/atoms';
import { useState } from 'react';
import PhEyeSlash from '@iconify-icons/ph/eye-slash';

export function BaseInputTest() {
  const [userName, setUserName] = useState('');
  return (
    <div className="font-kalameh">
      <form>
        <BaseInput
          id="userName"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          startIcon={PhEyeSlash}
          error="there is an error there is an error there is an error there is an error there is an error there is an error"
          helpText="there is help text there is help text there is help text there is help text there is help text there is help text"
          hiddenHelpText
          fullWidth
          dir="rtl"
          disabled
          label="نام کاربری"
        />
        <p>{userName}</p>
        <button type="submit">submit form</button>
      </form>
    </div>
  );
}
