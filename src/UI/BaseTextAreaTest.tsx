import { BaseTextarea } from '@ui/atoms/Inputs/BaseTextarea';
import { BaseTextareaController } from '@ui/atoms/Inputs/BaseTextarea/Controller';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function BaseTextAreaTest() {
  const [text, setText] = useState('');
  const [textShow, setTextShow] = useState('');
  const { control } = useForm();
  const handelMyForm = (e: FormEvent<HTMLFormElement>) => {
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
          label="متن من"
          helpText="there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text"
          hiddenHelpText
          error="there is  there is an error for this component there is an error for this component there is an error for this component there is an error for this component there is an error for this component"
          hiddenError
          placeholder="متن خود"
        />
        <p>{textShow}</p>
        <button type="submit">submit without control</button>
      </form>
      <form onSubmit={handelMyForm}>
        <BaseTextareaController
          id="myText"
          name="myText"
          control={control}
          label="متن من"
          helpText="there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text there is an help text"
          hiddenHelpText
          hiddenError
          dir="rtl"
          placeholder="متن خود"
        />
        <p>{textShow}</p>
        <button type="submit">submit without control</button>
      </form>
    </div>
  );
}
