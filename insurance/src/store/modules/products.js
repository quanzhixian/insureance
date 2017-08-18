import $http from "@/util/fetch"

const products = {
  namespaced: true,
  actions: {
    // 获取保险列表
    GetProductList({ commit, state }, { page, page_size,car_id } ) {
      return new Promise((resolve, reject) => {
        $http.get('/api/product/list',{
          params: {
            page,
            page_size,
            car_id
          }
        }).then(function (response) {//promise的一个成功回调
          var datas = response.data;
          resolve(datas)
        }).catch(function (response) {//promise的一个错误回调
          reject(response)
        });
      })
    },
    GetTypeList({ commit}) {
      return new Promise((resolve, reject) => {
        $http.get('/api/home/index',{})
          .then(function (response) {
            var datas = response.data;
            resolve(datas)
          })
          .catch(function (response) {
            reject(response)
          });
      })
    },
    GetProductDetail( { commit, state }, { product_id } ) {
      return new Promise((resolve, reject) => {
        $http.get('/api/product/view',{
          params: {
            product_id
          }
        }).then(function (response) {
          console.log(response)
          var data = response.data;
          resolve(response.data)
        }).catch(function (response) {
          reject(response)
        });
      })
    },
    GetHealthState({ commit, state }, config) {
      return new Promise((resolve, reject) => {
        $http.get('/health-state/view',{
          params: {
            product_id: config
          }
          
        }).then(function (response) {
          var data = response.data;
          resolve(response.data)
        }).catch(function (response) {
          reject(response)
        });
      })
    }
  }
}

export default products
