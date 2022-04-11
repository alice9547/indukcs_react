import React, {Component, PureComponent} from 'react';

class MyComponent extends Component {
    componentDidUpdate(){ console.log('MyComponent 새로고침'); }
    render() {return null;}
}

class MyPureComponent extends PureComponent {
    componentDidMount(){ console.log('MyPureComponent 새로고침'); }
    render() {return null;}
}

class TestApp extends React.Component {
    constructor(props){
        super(props);
        this.listValue = [{name: 'Park'}, {name: 'Lee'}];
        this.state = {version: 0};
    }
    handleClick(){
        setTimeout(() => {
            this.listValue[0].name = '컴소';
            this.setState({version:1});
        }, 100);
        setTimeout(() => {
            this.listValue = [{name: '컴소'}, {name: 'Lee'}];
        }, 200);
    }
    render(){
        return(
            <div className = "body">
                <MyComponent value = {this.listValue} />
                <MyPureComponent value = {this.listValue} />
                <button conClick = {this.handleClick}> 버튼 </button>
            </div>
        );
    }
}

export default TestApp;