// select the option
export const selectOption = (option, i) => ({
    type: 'SELECT_OPTION',
    i,
    option
});

// mark the uncorrect
export const markIncorrect = (i, value) => ({
    type: 'MARK_INCORRECT',
    i,
    value
});

// clear the form
export const clearForm = () => ({
    type: 'CLEAR_FORM'
});
