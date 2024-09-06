import api from "./conection";




const carregarProduto = async()=> {
    try {
        const resposta = await api.get('/produto')
        return resposta.data.products
    } catch (error: any) {
        console.log(error.message)
    }
}



export {carregarProduto}