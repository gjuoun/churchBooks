

class initPage {
  constructor() {
    
    this.addBookCLickListener()
    this.searchBar()
  }
  
  searchBar() {
    var cx = '007172865999873295840:zvftfiyuczi'
    var gcse = document.createElement('script')
    gcse.type = 'text/javascript'
    gcse.async = true
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(gcse, s)
    
    window.onload = function () {
      var searchBox = document.getElementById('gsc-i-id1')
      searchBox.placeholder = 'Search verse or song'
      searchBox.title = 'Search your favorite verse or song'
    }
  }
  
  addBookCLickListener() {
    const link = document.querySelector('ol')
    link.addEventListener('click',
      (event) => {
        let book = event.target.innerText
        book = book.replace(/[\s]/g, '_')
        localStorage.setItem('book', book)
      })
    
    // add hints
    
  }
}

let newPage = new initPage()