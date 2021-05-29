//Set showField value to true/false to show/hide field
function showHideFields(formContext, field, showField){    
    formContext.getControl(field).setVisible(showField);
}