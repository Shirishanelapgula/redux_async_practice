import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react"
import { fetchPost } from "./postSlice"

export const PostView =()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    const post = useSelector((state)=>state.post)

    console.log(post)

    
    return (
        <div>hello from postView</div>
    )
}
