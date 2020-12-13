import React from "react";
import PricesPresenter from "./PricesPresenter";
import { coinApi } from '../../api';

export default class extends React.Component{
    state = {
        showPricesList:null,
        error :null,
        loading:true
    }

    // const {data: { data: {movies}}
    //   } = await axios.get(
    //     "https://yts-proxy.now.sh/list_movies.json"
    //   );


    async componentDidMount(){
        try {
            const {data:showPricesList} = await coinApi.showPricesList();
            this.setState({
                showPricesList
            })
            
            
        } catch{
            this.setState({
                error:"can't find the Coin Price and List"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const {showPricesList,error,loading} = this.state;
        return <PricesPresenter
        showPricesList = {showPricesList}
        error={error}
        loading={loading}
        />
    }
}