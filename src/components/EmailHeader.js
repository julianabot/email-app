import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faFilter, faTrashCan, faChevronLeft, faChevronRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function EmailHeader(props) {
    let Delete = props.deleteFunction === undefined ? null : props.deleteFunction;

    const green = { color: '#6ab279' }
    const dgray = { color: '#404040' }
    const red = { color: '#dd453d' }

    const save = <FontAwesomeIcon icon={faSave} color="#6ab279" />
    const filter = <FontAwesomeIcon icon={faFilter} color="#404040" />
    const trash = <FontAwesomeIcon icon={faTrashCan} color="#dd453d" />
    const left = <FontAwesomeIcon icon={faChevronLeft} />
    const right = <FontAwesomeIcon icon={faChevronRight} />

    const saveFunc = { backgroundColor: '#edf8f5', borderColor: '#6ab279' }
    const filtFunc = { backgroundColor: '#FFFAFA', borderColor: '#404040' }
    const trashFunc = { backgroundColor: '#fcf1f1', borderColor: '#dd453d' }

    const down = <FontAwesomeIcon icon={faAngleDown} color="white" />

    function sayHello() {
        alert('hello')
    }

    return (
        <>
            <div className="email-header">
                <div className="function-holder">
                    <div className='function-tag' style={saveFunc} onClick={sayHello}>
                        <span style={green}>SAVE</span>{save}
                    </div>
                    <div className='function-tag' style={filtFunc} onClick={sayHello}>
                        <span style={dgray}>MANAGE FILTERS</span>{filter}
                    </div>
                    <div className="vl"></div>
                    <div className='function-tag' style={trashFunc} onClick={Delete}>
                        <span style={red}>DELETE</span>{trash}
                    </div>

                </div>
                <div className='tally-holder'>
                    {left} <span>50 of 100</span> {right}
                </div>
            </div >
            <div class="hl"></div>
            <div className='email-status'>
                <div>
                    <p>Unread</p>
                </div>
                <div className='unread-num'>
                    3 {down}
                </div>
            </div>
        </>
    )
}
export default EmailHeader;