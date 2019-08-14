import React from 'react';
import { Link } from "react-router-dom";

import { baseUrl } from "../../config/config";
import useFetch from '../useEffect/useFetch';

import './admin.css';

export function AdminIndex(){

  let data = useFetch(baseUrl + 'api/Posts');

  return (
    <div className="index">
      <div className="index-title">
        <button><Link to="/post/">新增</Link></button>
      </div>
      {data.map(item=>{
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