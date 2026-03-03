import React, { ReactNode } from 'react';
import Button from '../../Button';

import Panel from '../../Panel';
import Separator from './Separator';
import PopoverBase from '../../Popover';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hiddenCrumbs: ReactNode[];
  separatorLocation: 'before' | 'after';
};

export default function Toggler({
  open,
  setOpen,
  hiddenCrumbs,
  separatorLocation,
}: Props) {
  return (
    <>
      {separatorLocation === 'before' && <Separator />}
      <PopoverBase
        visible={open}
        actuator={
          <Button
            onClick={() => setOpen(!open)}
            icon="more-horiz"
            size="small"
          />
        }
        onClose={() => setOpen(false)}
        position="bottom"
      >
        <Panel elevated padding="reduced">
          {hiddenCrumbs}
        </Panel>
      </PopoverBase>
      {separatorLocation === 'after' && <Separator />}
    </>
  );
}
