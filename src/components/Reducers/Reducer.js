export const initialState = {
   
    user:localStorage.getItem("token"),
    currentPlaying:"https://www.youtube.com/embed/fBNz5xF-Kx4"
};

export const reducer = (state,action)=>{
    switch(action.type){
        case 'SET_USER':
           debugger;
            
            return{
                ...state,
                user:action.user
            }
        case 'SET_CURRENT_PLAYING':
            console.log(action);
            return {
                ...state,
                currentPlaying:action.src
            }
        case 'LOGOUT_USER':
            localStorage.setItem("token",null);
            return{
                ...state,
                user:null
            }
        default:
            return state;
    }
}