const mixin={
  data(){
    return {
      pv:''
    }
  },
  methods:{
     getPV(articleID){
      // let result;
        return new Promise((resolve, reject)=>{
          axios.get("/Blog/QueryBlogPV",{params:{id:articleID}})
            .then((res)=>{
              // console.log(res.data);
              // result =res.data;

              resolve(res.data) ;
              // return res.data;
            })
            .catch((err)=>{
              console.log(err);
              reject(err)

            });
        })

        // console.log(result);
        // this.pv =result;

        // return result;
    },
    updatePV(articleID,viewSum){
      // console.log(articleID);
      // viewSum+=1;
      let param ={
        id:articleID,
          viewSum:viewSum
      };

      return new Promise((resolve, reject)=>{
        axios.post("/Blog/UpdateBlogPV",param)
          .then((res)=>{
            // console.log(res);
            resolve(res.data)
          })
          .catch((err)=>{
            // console.log(err);
            reject(err)
          })
      });


    }
  }
};
export default mixin;
