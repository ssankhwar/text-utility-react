import React from 'react'

export default function Alert(props) {

   let capitalize = (alertType)=>{
     let lower = alertType.toLowerCase()
   return  lower.charAt(0).toUpperCase() + lower.slice(1);
     

   }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2" role="alert`}>
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
