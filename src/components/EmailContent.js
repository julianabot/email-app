import React, { useState } from 'react'
import Collapsible from 'react-collapsible';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { faClock } from '@fortawesome/free-regular-svg-icons'

// Components
import EmailTags from './EmailTags'

const grip = <FontAwesomeIcon icon={faGripVertical} color="gray" size='lg' />
const down = <FontAwesomeIcon icon={faAngleDown} color="gray" size='lg' />
const clock = <FontAwesomeIcon icon={faClock} color="#F6BE00" size='lg' />

function EmailContent({ funcCheck, id, date, subject, sender, content, tags }) {
    const [isOpen, setFlag] = useState(false);

    return (
        <div className='email-card'>
            <div className='email-preview'>
                <div className='left-half'>
                    {/* {id} */}
                    {grip}
                    <input type="checkbox" onChange={funcCheck} className={id} />
                    <div className='online-circle' />
                    <div className='date-box'>
                        <h1>{date[1]}</h1>
                        <p>{date[0].substring(0, 3).toUpperCase()}</p>
                    </div>
                    <div className='user-icon'>
                        <span>{sender[0].substring(0, 2).toUpperCase()}</span>
                    </div>
                    <div className='message-preview'>
                        <h1>{subject} <span>&#123;NEW - 10{id} / 17{id}&#125;</span></h1>
                        <p>{sender[0]} {sender[1]} &lt;{sender[2]}&gt; | {date[0]} {date[1]}, {date[2]} </p>
                    </div>
                </div>
                <div className='right-half'>

                    <div className='tag-holder'>
                        {!isOpen &&
                            <>
                                <EmailTags tagname={tags[0]} />
                                <EmailTags tagname={tags[1]} />
                                <EmailTags tagname={tags[0]} />
                                <EmailTags tagname="+3" />

                            </>
                        }
                    </div>
                    <div className='clock-holder'>
                        {clock}
                        <p>1 min.</p>
                    </div>
                    <div id='down' tagname='down' className='arrow-button' onClick={() => setFlag(!isOpen)}>
                        {down}
                    </div>
                </div>
            </div>
            <Collapsible open={isOpen} >
                <div className='email-content'>
                    <hr />
                    <div className='email-expand'>
                        <div className='email-'>
                            <h1>{sender[0]} {sender[1]}</h1>
                            <h2>{date[0]} {date[1]}, {date[2]}</h2>
                            <br />
                            <p>{content}</p>
                        </div>
                        <div className='tag-holder'>
                            <EmailTags tagname={tags[0]} />
                            <EmailTags tagname={tags[1]} />
                            <EmailTags tagname={tags[0]} />
                            <EmailTags tagname="+3" />
                        </div>
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}
export default EmailContent