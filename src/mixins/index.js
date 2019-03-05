const mixin={
  methods:{
    updatePV(articleID){
      console.log(articleID);
      let param ={
        articleID:articleID
      };
      axios.post("/Blogs/UpdatePV",param)
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        })

    }
  }
};
export default mixin;
