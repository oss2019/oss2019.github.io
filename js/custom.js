var opacity = 0;
function show_form(obj) {
   var both_elements = document.getElementsByClassName('both_toggle_hide')
   console.log(both_elements.length)
   for (var i = 0; i < both_elements.length; i++) {
      console.log(both_elements[i])
      both_elements[i].classList.remove('both_toggle_hide')
      both_elements[i].classList.add('both_toggle_show')
   }
   if (obj.id === 'project') {
      var project_elements_show = document.getElementsByClassName('project_toggle_hide')
      var idea_elements_hide = document.getElementsByClassName('idea_toggle_show')
      console.log(project_elements_show.length)
      for (var i = 0; i < project_elements_show.length; i++) {
         project_elements_show[i].classList.remove('project_toggle_hide')
         project_elements_show[i].classList.add('project_toggle_show')
      }
      for (var i = 0; i < idea_elements_hide.length; i++) {
         idea_elements_hide[i].classList.remove('idea_toggle_show')
         idea_elements_hide[i].classList.add('idea_toggle_hide')
      }
   }
   if (obj.id === 'idea') {
      var idea_elements_show = document.getElementsByClassName('idea_toggle_hide')
      var project_elements_hide = document.getElementsByClassName('project_toggle_show')
      for (var i = 0; i < idea_elements_show.length; i++) {
         idea_elements_show[i].classList.remove('idea_toggle_hide')
         idea_elements_show[i].classList.add('idea_toggle_show')
      }
      for (var i = 0; i < project_elements_hide.length; i++) {
         project_elements_hide[i].classList.remove('project_toggle_show')
         project_elements_hide[i].classList.add('project_toggle_hide')
      }
   }
}
