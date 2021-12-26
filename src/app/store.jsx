// redux here

import { configureStore } from 'reduxjs/toolkit';
import carReducer from '../components/car/carSlice';

export const store = configureStore({
	reducer : {
		car : carReducer
	}
});
