import React, { Component } from 'react'

 class componentName extends Component {
     state={
         list:[
             {
                 name:'苹果',
                 id:0,
                 check:false,
                 num:0,
                 p:18

             },
             {
                name:'香蕉',
                id:1,
                check:false,
                num:0,
                p:40

            }
         ],
         price:0,
         checkAll:false

     }
    render() {
        return (
            <div>
                {
                    this.state.list.map(item=>(
                        <div key={item.id}>
                        <input type="checkbox"  checked={item.check} onChange={()=>this.check(item.id)}/>
                           <p>{item.name}</p>
                          <span onClick={()=>this.add(1,item.id)}>+</span>
                          <span>{item.num}</span>
                          <span onClick={()=>this.add(2,item.id)}>-</span>
                        </div>
                   ) )
                }
               全选<input type="checkbox" checked={this.state.checkAll} onChange={this.checkedAll}/>
               总价 <span>{this.state.price.toFixed(2)}</span>
            </div>
        )
    }
    checkedAll=()=>{
        let newList=this.state.list
        newList.forEach(item=>(item.check=!this.state.checkAll))
        let  money =newList.reduce((prev, next)=>{
          if(next.check){
                prev+=next.num*next.p
            return prev
          }else{
              return 0
          }
          
      },0)
        this.setState({
            list:newList,
            checkAll:!this.state.checkAll,
            price:money
        })
        
    }
    
    check=(id)=>{
      let newList=this.state.list
       let ind= newList.findIndex(item=>item.id==id)
       newList[ind].check=! newList[ind].check
       let isCheck=newList.every(item=>item.check)
       if(!newList[ind].check){
        let money=newList[ind].num*newList[ind].p
        this.setState({
            price:this.state.price-money
        })
       }else{
        let money=newList[ind].num*newList[ind].p
        this.setState({
            price:this.state.price+money
        })
       }
      if(isCheck){
       this.setState({
        checkAll:true,
        list:newList,
       })
      }else{
        this.setState({
            checkAll:false,
            list:newList,
         
           })
      }
    }
    add=(str,id)=>{
        let newList=this.state.list
        let ind= newList.findIndex(item=>item.id==id)
        if(str===1){
            newList[ind].num++
         }else{
            if( newList[ind].num>0){
                newList[ind].num--
           }
         }
         this.setState({
            list:newList
           })
         if(newList[ind].check){
             let money =newList.reduce((prev, next)=>{
                prev+=next.num*next.p
                return prev
          },0)
             this.setState({
                list:newList,
                price:money
               })
         }
         
    }
}
export default componentName