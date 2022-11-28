// doGet is essential for web app deployment, so DO NOT REMOVE
function doGet() {
SpreadsheetApp.getActiveSpreadsheet()
 
 // Gets the active user's email to add a nice touch
 const userEmail = Session.getActiveUser().getEmail()
 
  // Prompts the user for assignment details
  var ui = SpreadsheetApp.getUi();
  var assignType = ui.prompt('Hi, ' + userEmail + '! Would you like to create material(s), assingment(s), or announcment(s)? Type none to exit');
  
  // Cancels the script after responding 'none'
  if (assignType.getResponseText() === 'none')
  ui.alert('Script ended. If there is an error screen after this, do not ignore it.')

  // Goes down a rabbit hole after responding 'material'
  else if (assignType.getResponseText() === 'material') {
    var materialName = ui.prompt('What is the name of the material?')
    var materialContent = ui.prompt('What information do you want on the material?')
    var materialAttachmentRequest = ui.prompt('Are there any attachments needed?')
    if (materialAttachmentRequest.getResponseText = 'yes') {
      var materialAttach = ui.prompt('Insert the URL here.')
      ui.alert('Creating material...')
    } else if (materialAttachmentRequest.getResponseText() = 'no') {
      ui.alert('Creating material...')
      Classroom.newMaterial(materialName.getResponseText(), materialContent.getResponseText(), materialAttach.getResponseText())
    } else {
      ui.alert('That is not a vaild input. Rerun the script and try again.')
    }
  } 
  
  // Goes down a rabbit hole after responding 'assignment'
  else if (assignType.getResponseText() === 'assignment') {
    var assignName = ui.prompt('What is the name of the assignment?')
    var assignContent = ui.prompt('What information do you want on the assignment?')
    var assignPoints = ui.prompt('How many points is this assignment worth? If not worth points, type none.')
    if (assignPoints.getResponseText() = 'none') {
      var assignPonts = 0
  } var assignDueDate = ui.prompt('What is the due date (format mm/dd/yy)? If no due date, type none.')
  var assignAttachRequest = ui.prompt('Are there any attachments needed?')
  if (assignAttachRequest.getResponseText() = 'yes') {
       var assignAttach = ui.prompt('Insert the URL here.')
       ui.alert('Creating assignment...')
       Classroom.newAssignment(assignName.getResponseText(), assignContent.getResponseText(), assignPoints.getResponseText(), assignDueDate.getResponseText(), assignAttach.getResponseText())
       } else if (assignAttachRequest.getResponseText() = 'no') {
         Classroom.newAssignment(assignName.getResponseText(), assignContent.getResponseText(), assignPoints.getResponseText(), assignDueDate.getResponseText())
         ui.alert('Creating assignment...')
       } else {
         ui.alert('That is not a vaild input. Rerun the script and try again.')
       }
  } else if (assignType.getResponseText() === 'announcement') {
    var announceContent = ui.prompt('What information do you want on the announcement?')
    var announceAtttachResponse = ui.prompt('Are there any attachments needed?')
    if (announceAtttachResponse.getResponseText() = 'yes') {
      var announceAttach = ui.prompt('Insert the URL here.')
      ui.alert('Creating announcement...')
      Classroom.newAnnouncement(announceContent.getResponseText(), announceAttach.getResponseText())
  } else if (announceAttachResponse.getResponseText() = 'no') {
    ui.alert('Creating announcement...')
    Classroom.newAnnouncement(announceContent.getResponseText(), announceAttach.getResponseText())
  } else {
    ui.alert('That is not a vaild input. Rerun the script and try again.')
  } 
  } else {
    ui.alert('That is not a vaild input. Rerun the script and try again.')
  }
  }
