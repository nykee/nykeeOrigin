const mixin={
  data(){
    return {
      pv:''
    }
  },
  methods:{
    getPV(articleID){
      let result;
      axios.get("/Blog/QueryBlogPV",{params:{id:articleID}})
          .then((res)=>{
              console.log(res.data);
              result =res.data;
              // return res.data;
          })
          .catch((err)=>{
              console.log(err);
          });
        return result;
    },
    updatePV(articleID,viewSum){
      console.log(articleID);
      viewSum+=1;
      let param ={
        id:articleID,
          viewSum:viewSum
      };
      axios.post("/Blog/UpdateBlogPV",param)
        .then((res)=>{
          console.log(res);
          return res;
        })
        .catch((err)=>{
          console.log(err);
        })

    }
  }
};
export default mixin;
