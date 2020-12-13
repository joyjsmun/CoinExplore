import React from "react";
import { render } from "react-dom";
import { coinApi } from '../../api';
import CoinsPresenter from "./CoinsPresenter";


export default class extends React.Component{
    state = {
        showCoins:null,
        error:null,
        loading:true
    }

    async componentDidMount(){
        try {
            const {data:showCoins} = await coinApi.showCoins();
            this.setState({
                showCoins
            })
        } catch{
            this.setState({
                error:"Can't show Coins rank!"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

render(){
    const {showCoins,error,loading} = this.state;
    
    return <CoinsPresenter
            showCoins = {showCoins}
            error={error}
            loading={loading}
            />;
    }
}