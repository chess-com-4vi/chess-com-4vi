import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CommandType } from './commandType';

export function CommandBar() {
  const [command, setCommand] = useState('');
  const commandBarMaxLength = 6;

  function identifyCommand(input: string): CommandType {
    let commandType: CommandType = CommandType.Unknown;

    // Smith notation
    if (/(?:[a-hA-H][1-8]){2}/g.test(input)) {
      commandType = CommandType.SmithNotation;
    }

    return commandType;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    let commandType = identifyCommand(command);

    switch (commandType) {
      case CommandType.SmithNotation:
          // handle move
          alert('Smith notation');
        break;
        
      default:
          // unknown command
          setCommand('');
          alert('Unknown command');
        break;
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {    
    setCommand(e.currentTarget.value);
  }

  return (
    <form action="submit" onSubmit={e => handleSubmit(e)}>
      <label htmlFor="">
        Command Bar
        <input type="text" 
               id='c4vi-command-bar' 
               value={command} 
               onChange={e => handleChange(e)} 
               name='command'
               autoComplete='off'
               maxLength={commandBarMaxLength}
               required/>
      </label>
      <input type="submit" />
    </form>
  );
}