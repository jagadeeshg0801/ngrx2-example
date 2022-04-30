import { createReducer } from "@ngrx/store";


const initialCount = 0; // Initial Data In Store

export function counterReducer(stateCount = initialCount, action: any){

    switch(action.type){
        case 'Increment': 
            if(stateCount ==10){
                alert('You reached max limit');
                return stateCount;
            }
            return stateCount + 1; 
            break;
        case 'Decrement':
            if(stateCount ==0){
                alert('You reached min limit');
                return stateCount;
            }
            return stateCount -1;
            break;
        case 'Reset':
            return stateCount =0;
            break;
        default :
            return stateCount;
    }
    
}