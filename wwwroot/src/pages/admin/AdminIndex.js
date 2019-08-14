import React from 'react';
import { Link } from "react-router-dom";

import './admin.css';

export function AdminIndex(){
  const list = [
    {
      id:"1",
      title:"标题1",
      content:"内容1",
      time:'2019-1-1',
      author:"jackeybiao",
      comment:[],
    },
    {
      id:"2",
      title:"标题2",
      content:"内容2",
      time:'2019-1-2',
      author:"jackeybiao",
      comment:[],
    },
    {
      id:"3",
      title:"标题3",
      content:"内容3",
      time:'2019-1-3',
      author:"jackeybiao",
      comment:[],
    },
  ];
  return (
    <div className="index">
      <div className="index-title">
        <button><Link to="/post/">新增</Link></button>
      </div>
      {list.map(item=>{
        return (
          <div className="index-item" key={item.id}>
            <Link to={"/post/" + item.id}>
              <div className="title">{item.title}</div>
              <div className="author">{item.author}</div>
              <div className="content">{item.content}</div>
            </Link>
            <div className="btn-box">
              <button><Link to={"/post/" + item.id}>编辑</Link></button>
              <button>删除</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}