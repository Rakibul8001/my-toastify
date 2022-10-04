import { toast } from 'react-toastify';
  
export default function MyToast(){
    function notify(type,message){
        toast[type](`${message}`);

    }
    return {
        notify
    };
}