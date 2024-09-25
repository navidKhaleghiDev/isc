import { BaseTextarea } from '@ui/atoms/Inputs/BaseTextarea';
import { FormEventHandler, useState } from 'react';

export default function BaseTextAreaTest() {
  const [text, setText] = useState('');
  const [textShow, setTextShow] = useState('');
  const handelMyForm = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    setTextShow(text);
  };
  return (
    <div className="font-kalameh p-5" dir="rtl">
      <form onSubmit={handelMyForm}>
        <BaseTextarea
          id="myText"
          name="myText"
          onChange={(e) => setText(e.target.value)}
          value={text}
          dir="ltr"
          fullWidth
          label="متن من"
          helpText="there is an help text there is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help textthere is an help text"
          hiddenHelpText
          error="there is an error for this component there is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this componentthere is an error for this component"
          // hiddenError
          placeholder="متن خود"
          // disabled
        />
        <p>{textShow}</p>
        <button type="submit">submit without control</button>
      </form>
    </div>
  );
}
