import { useState } from 'react'
// Don't forget to import useEffect!
import { useEffect, useState } from 'react'


const Records = (props) => {
  const [records, setRecords] = useState([])

  useEffect(()=> {
    console.log('Component mounted!')
  }, [])
  
  return ( 
    <>
      <div>
        <h2>Records</h2>
        <div className="icon-container">
          {/** 
						* This is where we map over our results, representing 
						* each with a div containing an image and a name 
					*/}
          {records.map((record) => (
            <div id="record" key={record}>
              <img 
								style={{ width: "100px", height: "100px" }}
								src={`/images/${record}.svg`} 
								alt="record-cover"
							/>
              {record}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default Records;