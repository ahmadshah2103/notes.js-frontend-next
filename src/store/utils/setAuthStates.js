export const setPendingState = (state) => {
    state.loading = true;
    state.error = null;
};

export const setFulfilledState = (state, action) => {
    state.loading = false;
    state.user = action.payload?.user ?? null;
    state.token = action.payload?.token ?? null;
    state.error = null;
};

export const setRejectedState = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};
