import {
    LOADMORE_PASSPORTS,
    REFRESH_PASSPORTS,
    LOAD_PASSPORTS_SUCCESS,
    LOAD_PASSPORTS_FAIL,
} from '../actions/types';

interface State {
    loading: boolean,
    refreshing: boolean,
    loadingMore: boolean,
    passports: any[]    
}

const INITIAL_STATE1:State = {
    loading: false,
    refreshing: false,
    loadingMore: false,
    passports: []
};

export default (state:State = INITIAL_STATE1, action:any) => {
    switch (action.type) {
        case LOAD_PASSPORTS_SUCCESS:
            let passports = state.passports.concat(action.payload);
            for(let i:number = 0; i<passports.length; i ++) {
                let passport = passports[i];
                passport.id = i;
                passports[i] = passport;
            }
            return { ...state, ...INITIAL_STATE1, passports: passports, loading: false, refreshing: false, loadingMore: false };
        case LOAD_PASSPORTS_FAIL:
            return { ...state, loading: false, refreshing: false, loadingMore: false };
        case LOADMORE_PASSPORTS:
            return { ...state, loading: true, loadingMore: true };
        case REFRESH_PASSPORTS:
            return { ...state, loading: true, refreshing: true, passports:[] };
        default:
            return state;
    }
};
