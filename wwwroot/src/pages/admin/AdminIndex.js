import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { getPosts, deletePost } from '../../api/japeApi';
import './admin.css';

export function AdminIndex(){
  const [data,setData] = useState([]);
  const [update,setUpdate] = useState(false)

  useEffect(() => {
    getPosts().then(response => {
      setData(response);
    })
  },[update])

  function deletePostItem(e){
    deletePost(e.target.dataset.id).then(response => {
      setUpdate(!update)
      alert("删除成功")
    })
  }


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
              <button data-id={item.id} onClick={e => {deletePostItem(e)}}>删除</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}