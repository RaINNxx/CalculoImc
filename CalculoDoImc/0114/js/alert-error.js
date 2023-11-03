 export const AlertError = {
  Element:document.querySelector('.alert-error'),

  open() {
    AlertError.Element.classList.add('open')

  },
  close(){
    AlertError.Element.classList.remove ('open')
  }
}
