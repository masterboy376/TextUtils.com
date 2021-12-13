import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert my-0 alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.msg}
            </div>}
        </div>
    )
}
//if props.alert is null(false) the the rest will not execute
