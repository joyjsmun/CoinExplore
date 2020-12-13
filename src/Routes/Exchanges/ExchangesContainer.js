import React from "react";
import {coinApi} from "../../api";
import ExchangesPresenter from "./ExchangesPresenter";

export default class extends React.Component{
    state={
        showExchanges:null,
        error:null,
        loading:true
    }

    async componentDidMount(){
        try {
            const {data:showExchanges} = await coinApi.showExchanges();
            this.setState({
                showExchanges
            })
        } catch{
            this.setState({
                error:"Can't show Exchanges list"
            })
            
        }finally{
            this.setState({
                loading:false
            })
        }
    }


    render(){
        const {showExchanges,error,loading} = this.state;
        return <ExchangesPresenter 
        showExchanges={showExchanges}
        error={error}
        loading={loading}
        />
    }
}