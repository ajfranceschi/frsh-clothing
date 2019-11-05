import {createSelector} from 'reselect';

// make the selector input
const selectDirectory = (rootReducerState) => rootReducerState.directory;

// make your selectors output
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);
