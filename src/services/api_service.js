import { Api } from '../lib'

const ApiService = {
    getProdictInfo: (data) => {
        return Api.post('/v1/product-information', {
            "domain": "sainsburys.co.uk", 
            "entity": "product",
            "url": data || "https://www.sainsburys.co.uk/shop/gb/groceries/product/details/new-355373-44/birds-eye-wokfresh-oriental-stir-fry-vegetable-mix-500g",
            "features": {}
        })
    }
}

export default ApiService