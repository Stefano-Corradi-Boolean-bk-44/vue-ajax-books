

const app = new Vue({

  el: '#app',

  data: {
    numero: '',
    isLoading: true,
    httpError: false,
    books:[],
    author:'Eco'
    
  },
  methods:{

    getBooks(){
      this.isLoading = true;

      axios.get('http://openlibrary.org/search.json?author='+this.author)
      .then((response) =>{

    

        this.books  = response.data.docs;

        console.log(this.books);

    
        this.isLoading = false;
      })
      .catch((error) =>{
        console.log('KO',error);
        // solo n questo caso viene visulizzato l'erroe
        this.httpError = true;
      })
    }

  },
  mounted(){

    this.getBooks();
    

  }






})