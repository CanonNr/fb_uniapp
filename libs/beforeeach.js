import {request} from '../libs/request'
import {getStore} from '../common/utils.js';



export const loginauth = {
    getuserid:() => {
        if(getStore('userid')){
			return true;
		}else{
			return false;
		}
    }
   
}