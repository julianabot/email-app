import React, { useState } from 'react'

// Components
import EmailHeader from './components/EmailHeader'
import EmailContent from './components/EmailContent'

import Emails from './emails.json'

function App() {

  let [emailList, setEmails] = useState(Emails);
  let [emailsToDelete, setToDelete] = useState([])

  const handleCheck = (event) => {
    var listTemp = emailsToDelete;
    if (event.target.checked) {
      listTemp = [...emailsToDelete, event.target.className];
    } else {
      listTemp.splice(emailsToDelete.indexOf(event.target.className), 1);
    }
    setToDelete(listTemp)
  };

  const deleteJSONObj = () => {
    var listTemp = emailList;
    emailsToDelete.forEach(d => delete listTemp[(parseInt(d) - 1)]);

    setEmails(listTemp);
    alert('Deleting objects... may take time... ')
  }

  return (
    <div className="app-main">
      <EmailHeader deleteFunction={deleteJSONObj} />
      {
        Emails && Emails.map(email => {
          return (
            <div>
              <EmailContent
                funcCheck={handleCheck}
                id={email.id}
                date={email.date}
                subject={email.emailSubject}
                sender={email.sender}
                content={email.content}
                tags={email.tags}
              />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
