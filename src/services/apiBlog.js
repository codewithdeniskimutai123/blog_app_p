import api from '../ui_components/api'

export async function getBlogs(page) {
     
    try {
        const response = await api.get(`blog_list/?page=${page}`)
        return response.data

    } catch (error) {
        throw new Error(error.message);
        
    }

    
}

export async function getBlog(slug){
    try{
        const response =  await api.get(`blogs/${slug}/`);
    return response.data
    }catch(error){
        throw new Error(error.message)
    }
    

}

export async function registerUser(data){
    try{
        const response = await api.post("register_user/", data)
        return response.data

    }catch(error){
        if(error.status == 400){
            throw new Error("Username already exist")
        }else{
            throw new Error(error)
        }


    }

}

export async function signin(data) {

    try {
        const response = await api.post("token/", data)
        return response.data

        
    } catch (error) {
        if(error.status === 401){
            throw new Error("invalid credentails")
        }
        else{
            throw new error(error)
        }
        
    }
    
}

 export async function getUsername() {

    try {

        const response = await api.get("get_username/")
        return response.data
        
    } catch (error) {
        throw new Error(error.message)
        
    }
    
 }


 export async function createBlog(data) {

    try {
        const response = await api.post("create_blog/", data)
        return response.data
        
    } catch (error) {
        throw new Error(error.message)
        
    }
    
    
 }

 export async function updateBlog(data, id) {

    try {
          console.log("Payload being sent:", data);
        const response = await api.put(`update_blog/${id}/`, data)
        return response.data
        
    } catch (error) {
        if(error.response){
             throw new Error(error.response?.data?.message || "failed to update")
        }
        throw new Error(error.message)
       
        
    }
    
 }

 export async function deleteBlog(id) {

    try {
        const response = await api.delete(`delete_blog/${id}/`)
        return response.data
        
    } catch (error) {
        if(error.response){
             throw new Error(error.response?.data?.message || "failed to delete a blog")
        }
        throw new Error(error.message)
       
        
    }
    
 }

 export async function getUserInfo(username) {

    try {

        const response = await api.get(`get_userInfo/${ username }`)
        return response.data
        
    } catch (error) {
        throw new Error(error.message)
        
    }
    
 }

 export async function updateProfile(data) {

    try {

        const response = await api.put("update_user/", data)
        return response.data
        
    } catch (err) {
        console.log(err)
        if(err.response){
            throw new Error(err?.response?.data.username[0] || "Failed to update profile")
        }
        throw new Error(err.message)
        
        
    }
    
 }