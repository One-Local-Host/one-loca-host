import React ,{ useEffect, useState }from 'react';
import Loader from 'components/Loader/Loader';
import { Result, Button } from 'antd';
import { firestore } from '../../firebaseConfig';

export default function Success({history}) {
  const  [payment, setPayment] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem("last_payment")){
      setPayment(localStorage.getItem("last_payment"))
      setLoading(false)
    }else{
      history.push('/')
    }
  },[]);

  useEffect(() => {
    console.log(payment)
    if(payment){
      firestore.collection("contract_houst").doc(payment).set({status: "APPROVED"}, {merge: true})
    }
  },[payment]);


  const goHostDetail = () => {
    localStorage.removeItem("last_payment")
    console.log("lo loga")
    // history.push('/')
  }
  return (
   <>
    <br/>
    <br/>
    <br/>
    {loading ?
    (<Loader/>) :
    (<Result
      status="success"
      title="Su Pago ha sido exitoso!"
      subTitle={`Pago ID : ${payment} - ${new Date()}`}
      extra={[
        <Button type="primary" key="console" onClick={goHostDetail} style={{backgroundColor: '#ffcf2c', borderColor: '#ffcf2c'}}>
          Ver Host
        </Button>
      ]}
    />)}
   </>
  );
}
