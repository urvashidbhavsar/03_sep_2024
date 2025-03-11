import React from 'react'
import ParentLogic from './ParentLogic'

const Mygallery = () => {
    let collection = ["https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
        "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
        "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg"]

    return (
        <>
            <div className="container">
                <div className="row g-3">
                    <ParentLogic mycollection={collection} />
                </div>
            </div>
        </>
    )
}

export default Mygallery
