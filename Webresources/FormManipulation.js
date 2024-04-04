//Set showField value to true/false to show/hide field
function showHideFields(formContext, field, showField){    
    formContext.getControl(field).setVisible(showField);
}

//Make field Readonly/Editable
function setFieldDisabled(formContext, field, shouldBeDisabled){
    formContext.getControl(field).setFieldDisabled(shouldBeDisabled);
}

//Set required level to none/required/recommended
function setRequiredLevel(formContext, field, requiredLevel){
    formContext.getAttribute(field).setRequiredLevel(requiredLevel);
}

//Set isValid for field
function setValidationMessage(formContext, field, isValid, message){
    formContext.getAttribute(field).setIsValid(isValid, message);
}

//Set Notification
function setNotificationForField(formContext, field, message, uniqueId){
    //set notification only when field is visible
    var isVisible = formContext.getControl(field).getVisible()
    if(isVisible == true){
        formContext.getControl(field).setNotification(message, uniqueId);
    }
}

//Set Field label
function setFieldLabel(formContext, field, label){
    formContext.getControl(field).setLabel(label);
}

//set Focus on a field
function setFocus(formContext, field){
    formContext.getControl(field).setFocus();
}