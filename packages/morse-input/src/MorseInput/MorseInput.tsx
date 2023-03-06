import React, { KeyboardEventHandler, useRef, useState } from 'react';

import { keyMap } from '@leafygreen-ui/lib';
import TextInput from '@leafygreen-ui/text-input';

import { MorseTable, textToMorse } from './MorseCodeTable';
import { MorseInputProps } from './MorseInput.types';

interface KeyLog {
  type: 'up' | 'down';
  time: number;
}

/**
 * Enter text in Morse Code.
 *
 * Press the space bar to enter morse code characters
 */
export function MorseInput({
  label,
  timeUnit = 72,
  ...props
}: MorseInputProps) {
  const dashTime = 3 * timeUnit;
  const dashThreshold = timeUnit + (dashTime - timeUnit) / 2;
  const charDelay = 3 * timeUnit;
  const spaceDelay = 7 * timeUnit;

  const keyLog = useRef<Array<KeyLog>>([]);
  const characterBuffer = useRef<Array<'-' | '.'>>([]);
  const [charTimerId, setCharTimer] = useState<NodeJS.Timeout>();
  const [spaceTimerId, setSpaceTimer] = useState<NodeJS.Timeout>();
  const [characters, setCharacters] = useState<Array<string>>([]);
  const getValue = () =>
    characters
      .map(char => {
        if (char in MorseTable) {
          return MorseTable[char as keyof typeof MorseTable];
        } else return char;
      })
      .join('');

  const getLastEvent = (type?: KeyLog['type']) => {
    const relevantArray = type
      ? keyLog.current.filter(log => log.type === type)
      : keyLog.current;
    const lastEvent = relevantArray.reverse()[0];
    return lastEvent;
  };

  const getTimeSinceLastEvent = (type?: KeyLog['type']) => {
    const lastEvent = getLastEvent(type);
    return lastEvent ? Date.now() - lastEvent.time : undefined;
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
    // if it's not the space bar, ignore it
    if (e.keyCode === keyMap.Space) {
      // when the key goes down
      // clear the timer(s)
      if (charTimerId) clearTimeout(charTimerId);
      if (spaceTimerId) clearTimeout(spaceTimerId);

      const lastEvent = getLastEvent();

      if (!lastEvent || lastEvent.type === 'up') {
        // Log the keydown event
        keyLog.current.push({
          type: 'down',
          time: Date.now(),
        });
      }
    } else if (e.keyCode === keyMap.Backspace || e.keyCode === keyMap.Delete) {
      const _tmp = [...characters];
      _tmp.pop();
      setCharacters(_tmp);
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = e => {
    // if it's not the space bar, ignore it
    if (e.keyCode === keyMap.Space) {
      const timeSinceLastEvent = getTimeSinceLastEvent('down');

      // When the key comes up
      // save either a dot or dash to the character buffer
      if (timeSinceLastEvent && timeSinceLastEvent > dashThreshold) {
        characterBuffer.current.push('-');
      } else {
        characterBuffer.current.push('.');
      }

      // Wait for another keyDown. If we timeout, then we save the character
      const _charTimer = setTimeout(() => {
        const char = characterBuffer.current.join('');
        let newChars = [...characters];

        if (char in MorseTable) {
          // eslint-disable-next-line no-console
          console.log(char, MorseTable[char as keyof typeof MorseTable]);
          newChars = [...characters, characterBuffer.current.join('')];
          setCharacters([...characters, characterBuffer.current.join('')]);
          characterBuffer.current.length = 0;
        }

        // If we still don't have a keydown after `spaceDelay` ms, then we add a space
        const _spaceTimer = setTimeout(() => {
          setCharacters([...newChars, ' ']);
          characterBuffer.current.length = 0;
        }, spaceDelay);
        setSpaceTimer(_spaceTimer);
      }, charDelay);
      setCharTimer(_charTimer);

      // Log the keyup event
      keyLog.current.push({
        type: 'up',
        time: Date.now(),
      });
    }
  };

  return (
    <TextInput
      {...props}
      type="text"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      value={getValue()}
      label={label ? textToMorse(label) : null}
    />
  );
}

MorseInput.displayName = 'MorseInput';
