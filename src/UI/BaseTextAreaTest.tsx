import { BaseTextarea } from '@ui/atoms/Inputs/BaseTextarea';
import { FormEventHandler, useState } from 'react';

export default function BaseTextAreaTest() {
  const [text, setText] = useState('');
  const handelMyForm = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="font-kalameh">
      <form onSubmit={handelMyForm}>
        <BaseTextarea
          id="myText"
          name="myText"
          onChange={(e) => setText(e.target.value)}
          value={text}
          dir="ltr"
          size="lg"
          label="متن من"
          helpText="there is an help text"
          hiddenHelpText
          placeholder="متن خود"
        />
        <button type="submit">submit without control</button>
      </form>
    </div>
  );
}
