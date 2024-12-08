
import { useState } from 'react'
import { app } from '../firebase'
import { getDatabase, ref, onValue } from 'firebase/database';
import CountUp from 'react-countup';

interface Props {
  org: string;
}

const db = getDatabase(app);

export const Counter = ({ org }: Props) => {
  const [collectedValue, setCollectedValue] = useState<number>(0);
  const counterRef = ref(db, `tenants/${org}/volunteers`);

  onValue(counterRef, (snapshot) => {
    const volunteers = snapshot.val();
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const value = Object.values(volunteers)?.reduce((acc: number, el: any) => acc += Number(el.value), 0);
    setCollectedValue(value);
  }, { onlyOnce: true });

  return (
    <div className="counter-wrapper">
      <CountUp className="counter" end={collectedValue} duration={3} delay={0.5} separator=" " decimal="," />
    </div>
  )
}