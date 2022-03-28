import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface Status {
    image?: any;
    title?: string;
    hasBg?: boolean;
    redirect: () => void;
    time: any;
}
const localStatus = localStorage.getItem('status');

export interface StatusState {
    status: Status[];
    loading: boolean;
}
const initialState: StatusState = {
    status: localStatus !== null ? JSON.parse(localStatus) : [] || [],
    loading: false,
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatus(state, actions: PayloadAction<Status>) {
            state.loading = true;
        },
        setStatusSuccess(state, actions: PayloadAction<Status>) {
            state.loading = false;
            const statusLocal = localStorage.getItem('status');
            const prevStatus = statusLocal !== null ? JSON.parse(statusLocal) : [];
            localStorage.setItem('status', JSON.stringify([...prevStatus, actions.payload]));
            state.status.push(actions.payload);
        },
        setStatusFail(state) {
            state.loading = false;
        },
    },
});

const statusReducer = statusSlice.reducer;
export default statusReducer;
//Action
export const statusAction = statusSlice.actions;

//Selector
export const selectStatus = (state: RootState) => state.status.status;
export const selectLoading = (state: RootState) => state.status.loading;
