var motivos = [
    " Comfortam jovens iludidas",
    "Trazem alegria em dias tristes",
    "Alimentam a esperança de um dia encontrar um cavalheiro",
    "Esperança de um mundo com mais amor",
    "Peter kavinsky serve como um ótimo exemplo para os marmanjos do nosso mundo"
  ];
  var imagens = [ 
  "https://todateen.com.br/wp-content/uploads/2019/01/lara-jean-e-peter-kavinsky-separados.jpg",
  "https://pbs.twimg.com/media/EXnM88OWoAA1vm6?format=jpg&name=4096x4096",
  "https://www.pluggedin.com/wp-content/uploads/2021/02/To-All-the-Boys-Always-and-Forever-WP.jpg",
  "https://noticiasdatv.uol.com.br/media/_versions/artigos/noah-centineo-lana-condor-para-todos-os-garotos-3-foto-katie-yu-netflix_fixed_large.jpg",
  "https://www.metroworldnews.com.br/resizer/CfekFTjTo8KFCk_cAoa5xhnQ3y8=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/HHMNSMVQURA4VO5MWV26NFHQRE.jpg"
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  