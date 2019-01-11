import {
  LOADMORE_PASSPORTS,
  REFRESH_PASSPORTS,
  LOAD_PASSPORTS_SUCCESS,
  LOAD_PASSPORTS_FAIL,
} from './types';

export const loadPassports = (refresh:any) => {
  return (dispatch:any) => {
    if (refresh)
      dispatch({
        type: REFRESH_PASSPORTS,
      });
    else
      dispatch({
        type: LOADMORE_PASSPORTS,
      });

      setTimeout(()=> {
        var passports = [];

        try {
          for (let i:number = 0; i < 10; i++)
            if (passports.length %2 == 0)
              passports.push(
                {
                  title: 'S:t Eriks Ogonsjukhus',
                  address: 'Vardavdelningen',
                  city: 'Stockholm',
                  thumbnailUrl: 'https://res.cloudinary.com/dg9ae8hup/image/upload/v1532167415/samples/landscapes/nature-mountains.jpg',
                  price: '292-365kr/tim',
                  rating: '4.0',
                  passes: 18
                }
              );
            else {
              passports.push({
                title: 'Sodersjukhuset',
                address: 'Akuten',
                city: 'Stockholm',
                thumbnailUrl: 'https://res.cloudinary.com/dg9ae8hup/image/upload/v1532167415/samples/landscapes/nature-mountains.jpg',
                price: '292-365kr/tim',
                rating: '3.0',
                passes: 5
              });
            }
        }
        catch (error) {
          loadPassportsFail(dispatch, error);
        }
        loadPassportsSuccess(dispatch, passports);
      }, 3000);

    
  };
};

const loadPassportsFail = (dispatch:any, error:any) => {
  dispatch({ type: LOAD_PASSPORTS_FAIL, payload: error });
};

const loadPassportsSuccess = (dispatch:any, passports:any) => {
  dispatch({
    type: LOAD_PASSPORTS_SUCCESS,
    payload: passports
  });
};
