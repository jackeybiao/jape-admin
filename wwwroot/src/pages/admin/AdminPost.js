import React, { useState } from 'react';

import { Route } from "react-router-dom";

import { baseUrl } from "../../config/config";
import useFetch from '../useEffect/useFetch';

import './admin.css';

import './admin.css';

export function AdminPost(){

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");

  const handleSave = e => {
    e.preventDefault();
  }

  useFetch(baseUrl+ "api/Posts",{title:title,content:content},"POST");

  return (
    <div className="post-content">
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="">标题</label>
          <input onChange={e=>setTitle(e.target.value)} type="text" value={title} />
        </div>
        <div className="form-group">
          <label htmlFor="">正文</label>
          <textarea onChange={e=>{setContent(e.target.value)}} name="" value={content} id="content" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
          <button onClick={handleSave}>保存</button>
        </div>
      </form>
    </div>
  )
}
