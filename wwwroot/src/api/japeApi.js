import request from '../utils/request';

export async function savePost(params){
  return request({
    url:'api/Posts',
    method:'post',
    data:params
  })
}

export async function getPosts(params){
  return request({
    url:'api/Posts',
    method:'get',
    params
  })
}

export async function getPost(id){
  return request({
    url:'api/Posts/' + id,
    method:'get',
  })
}

export async function updatePost(params){
  return request({
    url:'api/Posts/' + params.id,
    method:'PUT',
    data:params
  })
}

export async function deletePost(id){
  return request({
    url:'api/Posts/' + id,
    method:'DELETE',
  })
}