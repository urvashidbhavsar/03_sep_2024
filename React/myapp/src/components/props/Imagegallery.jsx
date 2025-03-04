import React from 'react'
import Setimg from './Setimg'

const Imagegallery = () => {
    const gallery = {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        padding: "30px"
    }
    const imgsize = {
        maxWidth: "100%"
    }

    return (
        <>
            <div style={gallery}>
                <Setimg imglink="https://st2.depositphotos.com/1006542/6566/i/450/depositphotos_65669135-stock-photo-woman-sitting-on-an-old.jpg" size={imgsize} alternate="Image1" />

                <Setimg imglink="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" size={imgsize} />

                <Setimg imglink="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" size={imgsize} />

                <Setimg imglink="https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg" size={imgsize} />

                <Setimg imglink="https://searchengineland.com/wp-content/seloads/2014/08/photos-images-pictures-ss-1920.jpg" size={imgsize} />

                <Setimg imglink="https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg" size={imgsize} />
            </div>
        </>
    )
}

export default Imagegallery
