
import { useEffect, useState } from 'react'
import { app } from '../firebase'
import { getDatabase, ref, get, query } from 'firebase/database';

interface Props {
  org: string;
}

const db = getDatabase(app);

export const Counter = ({ org }: Props) => {
  const [collectedValue, setCollectedValue] = useState();

  const getCollectedValue = async () => {
    const usersRef = ref(db, `tenants/${org}/volunteers`);
    const readUsers = await get(query(usersRef));
    const value = readUsers.val()?.reduce((acc: number, el: any) => acc += Number(el.value), 0);
    setCollectedValue(value);
  }

  useEffect(() => {
    getCollectedValue();
  }, [])

  return (
    <div>
      {collectedValue}
    </div>
  )
}