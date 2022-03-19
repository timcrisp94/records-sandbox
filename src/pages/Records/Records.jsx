import { useState, useEffect } from 'react'
import { getRecords } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const Records = (props) => {
  const [records, setRecords] = useState([])

  useEffect(()=> {
    getRecords()
    .then(records => setRecords(records.results))
  }, [])
  
  return ( 
    <>
     <h2>Records</h2>
      <>
        {records.map((record =>
          <div key={record.index}>
            <Link
              to="/record"
              state={{ record }}
            >
              {record.title}
              </Link><br/>    
       </div>
      ))}
    </>
    :
    <>
      <h2>Loading records..</h2>
    </>
  </>
  ); 
}

 
export default Records;