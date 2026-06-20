import { useEffect } from 'react';
import { Player } from '@lordicon/react';

import styles from './HeartIcon.module.scss';

import heartbeat from '../../img/heartbeat.json';

import { useLordicon } from '../../hooks/useLordicon';

interface HeartIconProps {
  isSelected?: boolean;
  trigger?: number;
}

export const HeartIcon = ({
  isSelected = false,
  trigger,
}: HeartIconProps) => {
  const { playerRef, handleMouseEnter } = useLordicon();
  const iconColor = isSelected ? '#FF2400' : '#808080';

  useEffect(() => {
    if (isSelected && playerRef.current) {
      playerRef.current?.playFromBeginning();
    }
  }, [isSelected, trigger, playerRef]);

  return (
    <div className={styles.heartIcon} onMouseEnter={handleMouseEnter}>
      <Player
        icon={heartbeat}
        ref={playerRef}
        colors={`primary:${iconColor}, secondary:${iconColor}`}
      />
    </div>
  );
};
