import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRecord } from '../../services/api-calls'

const Record = (props) => {
  const [record, setRecord] = useState({})
  let location = useLocation()

  useEffect(() => {
    getRecord(location.state.Record.url)
    .then(Record => setRecord(Record))

  }, [])

  return ( 
    <>
      <div>
        <h3>Record</h3>
        <h4>Title: {record.title}</h4>
      </div>
    </>


   );
}
 
export default Record;