import React from 'react';

import './admin.css';

export function AdminPost(){
  return (
    <div className="post-content">
      <form>
        <div className="form-group">
          <label htmlFor="">标题</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label htmlFor="">正文</label>
          <textarea name="" id="content" cols="30" rows="10"></textarea>
        </div>
        <div className="form-group">
          <button>保存</button>
        </div>
      </form>
    </div>
  )
}
