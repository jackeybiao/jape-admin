import React, { Component } from 'react';
import { savePost,getPost,updatePost } from '../../api/japeApi';
import './admin.css';

export class AdminPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      title:'',
      content:''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeArea = this.handleChangeArea.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let id = window.location.href.split("/")[4];
    getPost(id).then(response=>{
      this.setState({
        id:response.id || '',
        title:response.title || '',
        content:response.content || '',
      })
    })
  }

  handleChange(event){
    this.setState({
      title:event.target.value
    })
  }

  handleChangeArea(event){
    this.setState({
      content:event.target.value
    })
  }

  handleSubmit() {
    let parmas = {}
    if(this.state.id){
      parmas = {
        id:this.state.id,
        title:this.state.title,
        content:this.state.content,
      }
      updatePost(parmas).then(response=>{
        this.props.history.push('/')
      })
    }else{
      parmas = {
        title:this.state.title,
        content:this.state.content,
      }
      savePost(parmas).then(response=>{
        this.props.history.push('/')
      })
    }
  }
  
  render() {
    return (
      <div className="post-content">
        <form>
          <div className="form-group">
            <input value={this.state.title} onChange={this.handleChange} type="text" placeholder="标题" />
          </div>
          <div className="form-group">
            <textarea value={this.state.content} onChange={this.handleChangeArea} name="" placeholder="内容" id="" cols="30" rows="10"></textarea>
          </div>
          <button onClick={this.handleSubmit}>提交</button>
        </form>
      </div>
    )
  }
}
